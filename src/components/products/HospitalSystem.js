import React from 'react';
import {
  Activity,
  Calendar,
  FileText,
  FlaskConical,
  Pill,
  Users,
  Search,
  Bell,
} from 'lucide-react';
import './HospitalSystem.css';

const HospitalSystem = () => (
  <div className="hms app-ui app-ui--desktop" role="img" aria-label="Hospital Management System preview">
    <aside className="hms__sidebar">
      <div className="hms__brand">
        <div className="hms__logo"><Activity size={16} /></div>
        <div><strong>MediSync</strong><span>Kigali General</span></div>
      </div>
      <nav className="hms__nav">
        <a className="hms__nav-item hms__nav-item--active" href="#!"><Users size={15} /> Patients</a>
        <a className="hms__nav-item" href="#!"><Calendar size={15} /> Appointments</a>
        <a className="hms__nav-item" href="#!"><FileText size={15} /> Records</a>
        <a className="hms__nav-item" href="#!"><FlaskConical size={15} /> Laboratory</a>
        <a className="hms__nav-item" href="#!"><Pill size={15} /> Pharmacy</a>
      </nav>
    </aside>

    <div className="hms__main">
      <header className="hms__topbar">
        <div className="hms__search"><Search size={14} /><span>Search patients, records…</span></div>
        <button type="button" className="hms__notif-btn"><Bell size={16} /><span>5</span></button>
        <div className="hms__user"><div className="hms__avatar">DK</div><div><strong>Dr. Keza</strong><span>Chief Physician</span></div></div>
      </header>

      <div className="hms__content">
        <div className="hms__stats">
          <div className="hms__stat"><span>Patients Today</span><strong>47</strong><small>12 in queue</small></div>
          <div className="hms__stat"><span>Bed Occupancy</span><strong>78%</strong><small>94 / 120 beds</small></div>
          <div className="hms__stat"><span>Lab Pending</span><strong>8</strong><small>3 urgent</small></div>
          <div className="hms__stat hms__stat--accent"><span>Billing Today</span><strong>RWF 4.2M</strong><small>28 invoices</small></div>
        </div>

        <div className="hms__grid">
          <div className="hms__panel">
            <h3>Patient Queue</h3>
            <div className="hms__queue">
              {[
                { name: 'Emmanuel Niyonzima', id: 'P-20481', wait: '8 min', dept: 'Cardiology' },
                { name: 'Grace Uwase', id: 'P-20482', wait: '15 min', dept: 'General' },
                { name: 'Patrick Habimana', id: 'P-20483', wait: '22 min', dept: 'Orthopedics' },
                { name: 'Alice Mukamana', id: 'P-20484', wait: '31 min', dept: 'Pediatrics' },
              ].map((p) => (
                <div key={p.id} className="hms__queue-item">
                  <div className="hms__queue-avatar">{p.name.split(' ').map(n => n[0]).join('')}</div>
                  <div><strong>{p.name}</strong><span>{p.id} · {p.dept}</span></div>
                  <span className="hms__wait">{p.wait}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="hms__panel">
            <h3>Doctor Schedule</h3>
            <div className="hms__schedule">
              {[
                { time: '09:00', doctor: 'Dr. Keza', room: 'Room 201', status: 'In progress' },
                { time: '10:30', doctor: 'Dr. Mutabazi', room: 'Room 105', status: 'Next' },
                { time: '11:00', doctor: 'Dr. Uwimana', room: 'Room 312', status: 'Scheduled' },
                { time: '14:00', doctor: 'Dr. Nsengimana', room: 'Surgery 2', status: 'Scheduled' },
              ].map((s) => (
                <div key={s.time + s.doctor} className="hms__sched-item">
                  <strong>{s.time}</strong>
                  <div><span>{s.doctor}</span><small>{s.room}</small></div>
                  <span className={`hms__status hms__status--${s.status.toLowerCase().replace(' ', '-')}`}>{s.status}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="hms__panel hms__panel--wide">
            <h3>Bed Occupancy</h3>
            <div className="hms__beds">
              {['ICU', 'General Ward A', 'General Ward B', 'Maternity', 'Pediatrics'].map((ward, i) => (
                <div key={ward} className="hms__bed-row">
                  <span>{ward}</span>
                  <div className="hms__bed-bar"><div style={{ width: `${[92, 75, 68, 85, 60][i]}%` }} /></div>
                  <strong>{[92, 75, 68, 85, 60][i]}%</strong>
                </div>
              ))}
            </div>
          </div>

          <div className="hms__panel">
            <h3>Laboratory Status</h3>
            <div className="hms__lab-list">
              <div className="hms__lab-item"><span>CBC — Emmanuel N.</span><span className="hms__lab-urgent">Urgent</span></div>
              <div className="hms__lab-item"><span>X-Ray — Grace U.</span><span className="hms__lab-done">Complete</span></div>
              <div className="hms__lab-item"><span>Blood Panel — Patrick H.</span><span className="hms__lab-pending">Processing</span></div>
            </div>
            <h3 className="hms__subhead">Pharmacy Overview</h3>
            <div className="hms__pharmacy">
              <div><span>Prescriptions filled</span><strong>34</strong></div>
              <div><span>Low stock alerts</span><strong className="hms__alert">5</strong></div>
              <div><span>Pending orders</span><strong>12</strong></div>
            </div>
          </div>

          <div className="hms__panel">
            <h3>Billing Summary</h3>
            <div className="hms__billing">
              <div className="hms__bill-row"><span>Consultations</span><strong>RWF 1,840,000</strong></div>
              <div className="hms__bill-row"><span>Procedures</span><strong>RWF 1,520,000</strong></div>
              <div className="hms__bill-row"><span>Pharmacy</span><strong>RWF 620,000</strong></div>
              <div className="hms__bill-row"><span>Lab Tests</span><strong>RWF 220,000</strong></div>
              <div className="hms__bill-total"><span>Total Today</span><strong>RWF 4,200,000</strong></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default HospitalSystem;
