import React from "react";
import "./pra7/Colleges.css"; // path correct since file is inside pra7

export default function Colleges() {
return (
    <section className="charusat">
    <h2 className="charusat__heading">Constituent Institutes of CHARUSAT</h2>
    <ul className="college-grid">
        <li className="college-card" data-faculty="engineering">
        <span className="college-badge">Engineering & Technology</span>
        <h3 className="college-title">
            Chandubhai S Patel Institute of Technology (CSPIT)
        </h3>
        <p className="college-subtitle">Engineering and Technology</p>
        </li>

        <li className="college-card" data-faculty="it">
        <span className="college-badge">Computer Applications & IT</span>
        <h3 className="college-title">
            Smt. Chandaben Mohanbhai Patel Institute of Computer Applications (CMPICA)
        </h3>
        <p className="college-subtitle">Computer Applications and IT</p>
        </li>

        <li className="college-card" data-faculty="pharmacy">
        <span className="college-badge">Pharmacy</span>
        <h3 className="college-title">Ramanbhai Patel College of Pharmacy (RPCP)</h3>
        <p className="college-subtitle">Pharmacy</p>
        </li>

        <li className="college-card" data-faculty="management">
        <span className="college-badge">Management</span>
        <h3 className="college-title">Indukaka Ipcowala Institute of Management (IIIM)</h3>
        <p className="college-subtitle">Management Studies</p>
        </li>

        <li className="college-card" data-faculty="sciences">
        <span className="college-badge">Applied Sciences</span>
        <h3 className="college-title">P D Patel Institute of Applied Sciences (PDPIAS)</h3>
        <p className="college-subtitle">Applied and Basic Sciences</p>
        </li>

        <li className="college-card" data-faculty="physiotherapy">
        <span className="college-badge">Physiotherapy</span>
        <h3 className="college-title">Ashok and Rita Patel Institute of Physiotherapy (ARIP)</h3>
        <p className="college-subtitle">Physiotherapy</p>
        </li>

        <li className="college-card" data-faculty="nursing">
        <span className="college-badge">Nursing</span>
        <h3 className="college-title">Manikaka Topawala Institute of Nursing (MTIN)</h3>
        <p className="college-subtitle">Nursing</p>
        </li>

        <li className="college-card" data-faculty="paramedical">
        <span className="college-badge">Paramedical</span>
        <h3 className="college-title">Charotar Institute of Paramedical Sciences</h3>
        <p className="college-subtitle">Paramedical Courses</p>
        </li>

        <li className="college-card" data-faculty="engineering">
        <span className="college-badge">Advanced Tech</span>
        <h3 className="college-title">
            Devang Patel Institute of Advance Technology and Research (DEPSTAR)
        </h3>
        <p className="college-subtitle">Advanced Technologies and Research</p>
        </li>
    </ul>
    </section>
);
}
