import React from 'react';
import {
  Send,
  Receipt,
  QrCode,
  PiggyBank,
  CreditCard,
  Home,
  Clock,
  ChevronRight,
  Eye,
} from 'lucide-react';
import './MobileBankingApp.css';

const MobileBankingApp = () => (
  <div className="mba app-ui app-ui--mobile" role="img" aria-label="Mobile banking application preview">
    <div className="mba__phone">
      <div className="mba__status-bar">
        <span>9:41</span>
        <div className="mba__status-icons" />
      </div>

      <div className="mba__header">
        <div>
          <span>Good afternoon</span>
          <h2>Marie Claire U.</h2>
        </div>
        <div className="mba__avatar">MU</div>
      </div>

      <div className="mba__balance-card">
        <div className="mba__balance-top">
          <span>Available Balance</span>
          <button type="button" className="mba__eye" aria-label="Toggle balance"><Eye size={14} /></button>
        </div>
        <strong>RWF 2,450,000</strong>
        <div className="mba__balance-meta">
          <span>Savings: RWF 890,000</span>
          <span className="mba__growth">+4.2% this month</span>
        </div>
      </div>

      <div className="mba__actions">
        <button type="button" className="mba__action mba__action--primary">
          <Send size={18} />
          <span>Send Money</span>
        </button>
        <button type="button" className="mba__action">
          <Receipt size={18} />
          <span>Pay Bills</span>
        </button>
        <button type="button" className="mba__action">
          <QrCode size={18} />
          <span>QR Pay</span>
        </button>
        <button type="button" className="mba__action">
          <PiggyBank size={18} />
          <span>Savings</span>
        </button>
      </div>

      <div className="mba__section">
        <div className="mba__section-head">
          <h3>Your Cards</h3>
          <a href="#!">Manage</a>
        </div>
        <div className="mba__card-visual">
          <div className="mba__card-chip" />
          <span className="mba__card-number">•••• •••• •••• 4829</span>
          <div className="mba__card-footer">
            <span>MARIE CLAIRE U.</span>
            <span>12/28</span>
          </div>
        </div>
      </div>

      <div className="mba__section">
        <div className="mba__section-head">
          <h3>Savings Goals</h3>
          <span>2 active</span>
        </div>
        <div className="mba__goal">
          <div className="mba__goal-info">
            <strong>Home Deposit</strong>
            <span>RWF 620,000 / 2,000,000</span>
          </div>
          <div className="mba__goal-bar"><div style={{ width: '31%' }} /></div>
        </div>
        <div className="mba__goal">
          <div className="mba__goal-info">
            <strong>Education Fund</strong>
            <span>RWF 270,000 / 500,000</span>
          </div>
          <div className="mba__goal-bar"><div style={{ width: '54%' }} /></div>
        </div>
      </div>

      <div className="mba__section mba__section--scroll">
        <div className="mba__section-head">
          <h3>Recent Transactions</h3>
          <a href="#!">See all</a>
        </div>
        <div className="mba__txn">
          <div className="mba__txn-icon mba__txn-icon--out">MT</div>
          <div className="mba__txn-info">
            <strong>MTN Mobile Money</strong>
            <span>Today, 11:24 AM</span>
          </div>
          <span className="mba__txn-amount mba__txn-amount--debit">- RWF 45,000</span>
        </div>
        <div className="mba__txn">
          <div className="mba__txn-icon mba__txn-icon--in">SC</div>
          <div className="mba__txn-info">
            <strong>Salary — CloudSync Ltd</strong>
            <span>Yesterday</span>
          </div>
          <span className="mba__txn-amount mba__txn-amount--credit">+ RWF 850,000</span>
        </div>
        <div className="mba__txn">
          <div className="mba__txn-icon mba__txn-icon--out">EW</div>
          <div className="mba__txn-info">
            <strong>Electricity — REG</strong>
            <span>Jul 1, 2026</span>
          </div>
          <span className="mba__txn-amount mba__txn-amount--debit">- RWF 28,500</span>
        </div>
        <div className="mba__txn">
          <div className="mba__txn-icon mba__txn-icon--out">AF</div>
          <div className="mba__txn-info">
            <strong>Akazuba Florist</strong>
            <span>Jun 30, 2026</span>
          </div>
          <span className="mba__txn-amount mba__txn-amount--debit">- RWF 32,000</span>
        </div>
      </div>

      <nav className="mba__tabbar">
        <button type="button" className="mba__tab mba__tab--active"><Home size={18} /><span>Home</span></button>
        <button type="button" className="mba__tab"><CreditCard size={18} /><span>Cards</span></button>
        <button type="button" className="mba__tab"><Clock size={18} /><span>History</span></button>
        <button type="button" className="mba__tab"><ChevronRight size={18} /><span>More</span></button>
      </nav>
    </div>
  </div>
);

export default MobileBankingApp;
