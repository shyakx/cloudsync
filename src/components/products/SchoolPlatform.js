import React from 'react';
import {
  GraduationCap,
  Users,
  Calendar,
  ClipboardList,
  Wallet,
  Megaphone,
  BarChart3,
  Search,
} from 'lucide-react';
import './SchoolPlatform.css';

const SchoolPlatform = () => (
  <div className="sch app-ui app-ui--desktop" role="img" aria-label="School Management Platform preview">
    <aside className="sch__sidebar">
      <div className="sch__brand">
        <div className="sch__logo"><GraduationCap size={16} /></div>
        <div><strong>EduSync</strong><span>Green Hills Academy</span></div>
      </div>
      <nav className="sch__nav">
        <a className="sch__nav-item sch__nav-item--active" href="#!"><Users size={15} /> Students</a>
        <a className="sch__nav-item" href="#!"><ClipboardList size={15} /> Attendance</a>
        <a className="sch__nav-item" href="#!"><Calendar size={15} /> Timetable</a>
        <a className="sch__nav-item" href="#!"><BarChart3 size={15} /> Grades</a>
        <a className="sch__nav-item" href="#!"><Wallet size={15} /> Fees</a>
      </nav>
    </aside>

    <div className="sch__main">
      <header className="sch__topbar">
        <div className="sch__search"><Search size={14} /><span>Search students, classes…</span></div>
        <span className="sch__term">Term 2 · 2026</span>
        <div className="sch__user"><div className="sch__avatar">AM</div><strong>Admin Mukamana</strong></div>
      </header>

      <div className="sch__content">
        <div className="sch__stats">
          <div className="sch__stat"><span>Total Students</span><strong>1,248</strong></div>
          <div className="sch__stat sch__stat--accent"><span>Attendance Today</span><strong>94.2%</strong></div>
          <div className="sch__stat"><span>Fees Collected</span><strong>RWF 18.6M</strong></div>
          <div className="sch__stat"><span>Teachers</span><strong>86</strong></div>
        </div>

        <div className="sch__grid">
          <div className="sch__panel sch__panel--wide">
            <h3>Student List — Grade 10A</h3>
            <table className="sch__table">
              <thead>
                <tr><th>Student</th><th>ID</th><th>Attendance</th><th>Avg Grade</th><th>Status</th></tr>
              </thead>
              <tbody>
                {[
                  { name: 'Kevin Nshimiyimana', id: 'ST-1024', att: '98%', grade: 'A', status: 'Active' },
                  { name: 'Divine Ishimwe', id: 'ST-1025', att: '96%', grade: 'A-', status: 'Active' },
                  { name: 'Eric Habiyakare', id: 'ST-1026', att: '91%', grade: 'B+', status: 'Active' },
                  { name: 'Chantal Uwera', id: 'ST-1027', att: '88%', grade: 'B', status: 'Active' },
                ].map((s) => (
                  <tr key={s.id}>
                    <td><div className="sch__student-cell"><div className="sch__s-avatar">{s.name[0]}</div>{s.name}</div></td>
                    <td>{s.id}</td>
                    <td>{s.att}</td>
                    <td><span className="sch__grade">{s.grade}</span></td>
                    <td><span className="sch__pill">{s.status}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="sch__panel">
            <h3>Today&apos;s Timetable</h3>
            <div className="sch__timetable">
              {[
                { time: '08:00', subject: 'Mathematics', teacher: 'Mr. Nkurunziza', room: 'Lab 2' },
                { time: '09:30', subject: 'Physics', teacher: 'Dr. Uwase', room: 'Room 14' },
                { time: '11:00', subject: 'English', teacher: 'Ms. Keza', room: 'Room 8' },
                { time: '13:30', subject: 'Computer Science', teacher: 'Mr. Bizimana', room: 'ICT Lab' },
              ].map((t) => (
                <div key={t.time} className="sch__tt-item">
                  <strong>{t.time}</strong>
                  <div><span>{t.subject}</span><small>{t.teacher} · {t.room}</small></div>
                </div>
              ))}
            </div>
          </div>

          <div className="sch__panel">
            <h3>Performance Overview</h3>
            <div className="sch__perf-chart">
              {['Math', 'Science', 'English', 'History', 'CS'].map((subj, i) => (
                <div key={subj} className="sch__perf-col">
                  <div className="sch__perf-bar" style={{ height: `${[82, 76, 88, 71, 91][i]}%` }} />
                  <span>{subj}</span>
                </div>
              ))}
            </div>
            <p className="sch__perf-note">Class average: <strong>81.6%</strong> · Up 3.2% from last term</p>
          </div>

          <div className="sch__panel">
            <h3>Announcements</h3>
            <div className="sch__announce">
              <Megaphone size={14} />
              <div><strong>Parent-Teacher Meeting</strong><span>July 12, 2026 · Main Hall</span></div>
            </div>
            <div className="sch__announce">
              <Megaphone size={14} />
              <div><strong>Fee Payment Deadline</strong><span>July 15, 2026 · Term 2 balance</span></div>
            </div>
            <h3 className="sch__subhead">Fee Summary</h3>
            <div className="sch__fees">
              <div className="sch__fee-row"><span>Collected</span><strong>RWF 18,600,000</strong></div>
              <div className="sch__fee-row"><span>Outstanding</span><strong>RWF 3,200,000</strong></div>
              <div className="sch__fee-bar"><div style={{ width: '85%' }} /></div>
              <span className="sch__fee-pct">85% collection rate</span>
            </div>
          </div>

          <div className="sch__panel">
            <h3>Teacher Management</h3>
            <div className="sch__teachers">
              {[
                { name: 'Mr. Nkurunziza', subject: 'Mathematics', classes: 4 },
                { name: 'Dr. Uwase', subject: 'Physics', classes: 3 },
                { name: 'Ms. Keza', subject: 'English', classes: 5 },
              ].map((t) => (
                <div key={t.name} className="sch__teacher">
                  <div className="sch__t-avatar">{t.name.split(' ')[1][0]}</div>
                  <div><strong>{t.name}</strong><span>{t.subject} · {t.classes} classes</span></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default SchoolPlatform;
