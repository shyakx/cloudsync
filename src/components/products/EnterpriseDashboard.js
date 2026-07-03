import React from 'react';
import {
  LayoutDashboard,
  Users,
  Wallet,
  BarChart3,
  Settings,
  Search,
  Bell,
  Calendar,
  TrendingUp,
  ArrowUpRight,
  ChevronDown,
} from 'lucide-react';
import './EnterpriseDashboard.css';

const EnterpriseDashboard = () => (
  <div className="ems app-ui app-ui--desktop" role="img" aria-label="Enterprise Management System dashboard preview">
    <aside className="ems__sidebar">
      <div className="ems__brand">
        <div className="ems__logo">CS</div>
        <div>
          <strong>CloudSync</strong>
          <span>Enterprise</span>
        </div>
      </div>
      <nav className="ems__nav">
        <a className="ems__nav-item ems__nav-item--active" href="#!"><LayoutDashboard size={16} /> Dashboard</a>
        <a className="ems__nav-item" href="#!"><Users size={16} /> Employees</a>
        <a className="ems__nav-item" href="#!"><Wallet size={16} /> Finance</a>
        <a className="ems__nav-item" href="#!"><BarChart3 size={16} /> Reports</a>
        <a className="ems__nav-item" href="#!"><Settings size={16} /> Settings</a>
      </nav>
      <div className="ems__sidebar-footer">
        <div className="ems__plan">
          <span>Professional Plan</span>
          <small>142 seats active</small>
        </div>
      </div>
    </aside>

    <div className="ems__main">
      <header className="ems__topbar">
        <div className="ems__search">
          <Search size={15} />
          <span>Search transactions, employees, reports…</span>
        </div>
        <div className="ems__topbar-actions">
          <button type="button" className="ems__icon-btn" aria-label="Notifications">
            <Bell size={17} />
            <span className="ems__badge">3</span>
          </button>
          <button type="button" className="ems__icon-btn" aria-label="Calendar">
            <Calendar size={17} />
          </button>
          <div className="ems__profile">
            <div className="ems__avatar">JN</div>
            <div>
              <strong>Jean Paul N.</strong>
              <span>Operations Director</span>
            </div>
            <ChevronDown size={14} />
          </div>
        </div>
      </header>

      <div className="ems__content">
        <div className="ems__page-header">
          <div>
            <h1>Good morning, Jean Paul</h1>
            <p>Here&apos;s what&apos;s happening across your organization today.</p>
          </div>
          <button type="button" className="ems__btn-primary">Export Report</button>
        </div>

        <div className="ems__stats">
          <div className="ems__stat-card">
            <span className="ems__stat-label">Total Revenue</span>
            <strong>RWF 24.8M</strong>
            <span className="ems__stat-trend ems__stat-trend--up"><ArrowUpRight size={13} /> 12.4%</span>
          </div>
          <div className="ems__stat-card">
            <span className="ems__stat-label">Active Employees</span>
            <strong>142</strong>
            <span className="ems__stat-trend ems__stat-trend--up"><ArrowUpRight size={13} /> 8 new</span>
          </div>
          <div className="ems__stat-card">
            <span className="ems__stat-label">Transactions</span>
            <strong>1,847</strong>
            <span className="ems__stat-trend ems__stat-trend--up"><TrendingUp size={13} /> This month</span>
          </div>
          <div className="ems__stat-card ems__stat-card--accent">
            <span className="ems__stat-label">Net Growth</span>
            <strong>+18.2%</strong>
            <span className="ems__stat-trend">vs last quarter</span>
          </div>
        </div>

        <div className="ems__grid">
          <div className="ems__panel ems__panel--chart">
            <div className="ems__panel-head">
              <h3>Revenue Overview</h3>
              <span>Jan – Jun 2026</span>
            </div>
            <div className="ems__chart">
              {[
                { m: 'Jan', h: 42, v: '3.2M' },
                { m: 'Feb', h: 55, v: '4.1M' },
                { m: 'Mar', h: 48, v: '3.8M' },
                { m: 'Apr', h: 62, v: '4.6M' },
                { m: 'May', h: 71, v: '5.2M' },
                { m: 'Jun', h: 78, v: '5.8M' },
              ].map((bar) => (
                <div key={bar.m} className="ems__chart-col">
                  <div className="ems__chart-bar" style={{ height: `${bar.h}%` }} />
                  <span>{bar.m}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="ems__panel">
            <div className="ems__panel-head">
              <h3>Calendar</h3>
              <span>July 2026</span>
            </div>
            <div className="ems__calendar">
              <div className="ems__cal-event">
                <strong>10:00</strong>
                <div><span>Board Review</span><small>Conference Room A</small></div>
              </div>
              <div className="ems__cal-event">
                <strong>14:30</strong>
                <div><span>Vendor Onboarding</span><small>Finance Dept</small></div>
              </div>
              <div className="ems__cal-event">
                <strong>16:00</strong>
                <div><span>Q3 Planning</span><small>Executive Suite</small></div>
              </div>
            </div>
          </div>

          <div className="ems__panel ems__panel--wide">
            <div className="ems__panel-head">
              <h3>Recent Transactions</h3>
              <a href="#!">View all</a>
            </div>
            <table className="ems__table">
              <thead>
                <tr>
                  <th>Reference</th>
                  <th>Customer</th>
                  <th>Department</th>
                  <th>Amount</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>TXN-88421</td>
                  <td>Kigali Logistics Ltd</td>
                  <td>Operations</td>
                  <td>RWF 1,240,000</td>
                  <td><span className="ems__pill ems__pill--success">Completed</span></td>
                </tr>
                <tr>
                  <td>TXN-88420</td>
                  <td>Amahoro Trading Co.</td>
                  <td>Sales</td>
                  <td>RWF 680,500</td>
                  <td><span className="ems__pill ems__pill--success">Completed</span></td>
                </tr>
                <tr>
                  <td>TXN-88419</td>
                  <td>Rwanda Telecom Partners</td>
                  <td>Finance</td>
                  <td>RWF 2,100,000</td>
                  <td><span className="ems__pill ems__pill--pending">Pending</span></td>
                </tr>
                <tr>
                  <td>TXN-88418</td>
                  <td>Green Valley Farms</td>
                  <td>Procurement</td>
                  <td>RWF 415,200</td>
                  <td><span className="ems__pill ems__pill--success">Completed</span></td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="ems__panel">
            <div className="ems__panel-head">
              <h3>Employee Statistics</h3>
            </div>
            <div className="ems__emp-stats">
              <div className="ems__emp-row">
                <span>Engineering</span>
                <div className="ems__emp-bar"><div style={{ width: '72%' }} /></div>
                <strong>38</strong>
              </div>
              <div className="ems__emp-row">
                <span>Sales</span>
                <div className="ems__emp-bar"><div style={{ width: '55%' }} /></div>
                <strong>29</strong>
              </div>
              <div className="ems__emp-row">
                <span>Operations</span>
                <div className="ems__emp-bar"><div style={{ width: '48%' }} /></div>
                <strong>25</strong>
              </div>
              <div className="ems__emp-row">
                <span>Support</span>
                <div className="ems__emp-bar"><div style={{ width: '35%' }} /></div>
                <strong>18</strong>
              </div>
            </div>
            <div className="ems__notif">
              <Bell size={14} />
              <div>
                <strong>3 approvals waiting</strong>
                <span>Leave requests from Finance team</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default EnterpriseDashboard;
