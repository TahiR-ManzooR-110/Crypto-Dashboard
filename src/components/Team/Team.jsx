import React from "react";
import "./team.css";
export default function Team() {
  return (
    <div id="team-coin-layout">
      <span id="team-label">Team</span>
      <p id="team-description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. In, tempore.
        Consequuntur, alias corrupti! Recusandae odit dolor vitae ratione sed
        voluptates, tempore voluptatem assumenda fugit! Aperiam corporis
        repudiandae repellendus nam hic?
      </p>

      <div id="team-members">
        <div className="team-member">
          <div
            style={{
              //   border: "solid 1px red",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="ProfilePic"
              style={{
                width: "100px",
                height: "110px",
                objectFit: "cover",
                borderRadius: "10px",
              }}
            />
            <span className="team-member-name">John Smith </span>
            <span className="team-member-role">Team Manager</span>
          </div>
          <div>
            <p className="team-memeber-intro">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa,
              esse tempore. Dolorem enim, eligendi ab sint illum molestiae,
              nulla ipsam voluptate asperiores quidem sit officia. Facere id
              porro mollitia perspiciatis! Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Soluta, maxime doloribus architecto
              nam reprehenderit quidem sit eligendi iusto porro officiis
              accusantium modi laborum ab facilis inventore fugiat in ipsam
              sunt?
            </p>
          </div>
        </div>
        <div className="team-member">
          {" "}
          <div
            style={{
              //   border: "solid 1px red",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="ProfilePic"
              style={{
                width: "100px",
                height: "110px",
                objectFit: "cover",
                borderRadius: "10px",
              }}
            />
            <span className="team-member-name">Hanah Johnson</span>
            <span className="team-member-role">Marketing Specialist</span>
          </div>
          <div>
            <p className="team-memeber-intro">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa,
              esse tempore. Dolorem enim, eligendi ab sint illum molestiae,
              nulla ipsam voluptate asperiores quidem sit officia. Facere id
              porro mollitia perspiciatis! Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Iusto fuga officiis illo laudantium
              nobis. Culpa, vero impedit. Exercitationem inventore optio ipsam
              molestias magnam architecto earum atque, aperiam, culpa sit
              accusantium.
            </p>
          </div>
        </div>
        <div className="team-member">
          {" "}
          <div
            style={{
              //   border: "solid 1px red",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="ProfilePic"
              style={{
                width: "100px",
                height: "110px",
                objectFit: "cover",
                borderRadius: "10px",
              }}
            />
            <span className="team-member-name">John Wick</span>
            <span className="team-member-role"> web Developer</span>
          </div>
          <div>
            <p className="team-memeber-intro">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa,
              esse tempore. Dolorem enim, eligendi ab sint illum molestiae,
              nulla ipsam voluptate asperiores quidem sit officia. Facere id
              porro mollitia perspiciatis! Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Quia architecto porro fugiat dolorum
              facilis at asperiores mollitia saepe aperiam reiciendis, minima
              voluptate aspernatur maxime ducimus, ipsam maiores. Blanditiis,
              similique nesciunt!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
