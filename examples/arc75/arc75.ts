/* eslint-disable object-shorthand */
/* eslint-disable no-undef */
/* eslint-disable class-methods-use-this */

import { Contract } from '../../src/lib/index';

type Whitelist = {account: Account, boxIndex: uint16, arc: string};

// eslint-disable-next-line no-unused-vars
class ARC75 extends Contract {
  whitelist = new BoxMap<Whitelist, uint64[]>({ defaultSize: 10 });

  @createApplication
  create(): void {}

  private verifyMBRPayment(payment: PayTxn, preMBR: uint64): void {
    assert(payment.amount === this.app.address.minBalance - preMBR);
    assert(payment.receiver === this.app.address);
  }

  private sendMBRPayment(preMBR: uint64): void {
    sendPayment({
      sender: this.app.address,
      receiver: this.txn.sender,
      amount: preMBR - this.app.address.minBalance,
      fee: 0,
    });
  }

  /**
   * Add collection to whitelist box
   *
   * @param id - The id of the senders's whitelist to add the collection to
   * @param collection - The app ID of the ARC72 contract for the collection
   * @param payment - The payment transaction to cover the MBR change
   *
   */
  addCollectionToWhiteList(arc: string, id: uint16, collection: uint64, payment: PayTxn): void {
    const preMBR = this.app.address.minBalance;
    const whitelist: Whitelist = { account: this.txn.sender, boxIndex: id, arc: arc };

    if (this.whitelist.exists(whitelist)) {
      this.whitelist.get(whitelist).push(collection);
    } else {
      const newWhitelist: uint64[] = [collection];
      this.whitelist.put(whitelist, newWhitelist);
    }

    this.verifyMBRPayment(payment, preMBR);
  }

  /**
   * Sets a collection whitelist for the sender. Should only be used when adding/removing
   * more than one collection
   *
   * @param id - The id of the sender's whitelist to set
   * @param collections - Array of app IDs that signify the whitelisted collections
   *
   */
  setCollectionWhitelist(arc: string, id: uint16, collections: uint64[]): void {
    const preMBR = this.app.address.minBalance;
    const whitelist: Whitelist = { account: this.txn.sender, boxIndex: id, arc: arc };

    this.whitelist.delete(whitelist);

    this.whitelist.put(whitelist, collections);

    if (preMBR > this.app.address.minBalance) {
      this.sendMBRPayment(preMBR);
    } else {
      this.verifyMBRPayment(this.txnGroup[this.txn.groupIndex - 1], preMBR);
    }
  }

  /**
   * Deletes a collection whitelist for the sender
   *
   * @param id - The id of the sender's whitelist to delete
   *
   */
  deleteWhitelist(arc: string, id: uint16): void {
    const preMBR = this.app.address.minBalance;
    const whitelist: Whitelist = { account: this.txn.sender, boxIndex: id, arc: arc };

    this.whitelist.delete(whitelist);

    this.sendMBRPayment(preMBR);
  }

  /**
   * Deletes a collection from a whitelist for the sender
   *
   * @param id - The id of the sender's whitelist to delete from
   * @param collection - The app ID of the ARC72 contract for the collection
   * @param index - The index of the collection in the whitelist
   *
   */
  deleteCollectionFromWhitelist(arc: string, id: uint16, collection: uint64, index: uint64): void {
    const preMBR = this.app.address.minBalance;
    const whitelist: Whitelist = { account: this.txn.sender, boxIndex: id, arc: arc };

    const spliced = this.whitelist.get(whitelist).splice(index, 1);

    assert(spliced[0] === collection);

    this.sendMBRPayment(preMBR);
  }
}
