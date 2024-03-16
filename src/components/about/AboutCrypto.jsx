import React from "react";
import "./aboutCrypto.css";
export default function AboutCrypto() {
  return (
    <div id="about-container">
      <span id="about-crypto-title">About Bitcoin</span>
      <div id="about-question-coin">
        <span>what is Bitcoin?</span>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, quasi.
          Nemo maxime ipsum nisi, beatae eligendi officiis facilis ducimus
          reprehenderit, officia eveniet sit accusantium temporibus, voluptatem
          fugiat deserunt unde sed quos ipsa porro nulla vero soluta. Architecto
          sunt illum labore!
        </p>
      </div>
      <div className="about-crypto-info">
        <span>Lorem ipsum dolor sit amet consectetur adipisicing.</span>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt
          voluptates sapiente ad ratione perspiciatis eligendi quia error dicta
          tempore rem, ullam fugit quos dolorem qui molestias reiciendis
          adipisci nobis facilis optio architecto blanditiis similique. Enim
          perspiciatis aperiam, culpa quod saepe recusandae debitis minima
          corrupti dolore sint, deserunt molestiae non temporibus excepturi et
        </p>
        <p>
          {" "}
          nihil animi obcaecati ipsum. Quibusdam harum minima eveniet voluptatum
          maxime quas maiores doloribus. Numquam asperiores architecto, sunt rem
          quo iusto possimus harum tempore labore ratione, nisi maiores placeat
          nulla autem totam assumenda voluptatibus aliquam quas libero, quidem
          explicabo. Labore dicta nostrum eligendi deserunt consequatur harum
          incidunt molestiae natus. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Distinctio explicabo nobis molestiae nostrum nihil
          fugiat libero itaque, ipsum, earum ea sequi quaerat expedita sit.
          Iusto aperiam quo, distinctio velit similique aspernatur porro
          veritatis adipisci quam reprehenderit deleniti quis est non optio
          dolore nostrum culpa iste laboriosam hic ab minima neque magni quidem.
        </p>
        <p>
          Placeat quos nemo quis veritatis, voluptatum ut saepe tempora dolores
          quisquam laborum corrupti ipsam, deleniti aperiam amet minima ipsa
          dolorum tenetur rem officia facere beatae accusantium voluptatem
          fugiat! Tempora necessitatibus vitae tenetur animi, voluptates,
          dignissimos repellat illo officiis quaerat quibusdam libero eligendi
          asperiores quod fuga deserunt inventore nostrum. Lorem ipsum dolor,
          sit amet consectetur adipisicing elit. Voluptas iusto dolorem soluta
          accusamus? Sapiente, ratione? Neque sapiente, quae ipsam repellat
          accusamus obcaecati iste, aut esse harum pariatur enim, laboriosam
          quidem aspernatur inventore earum veritatis laudantium perferendis.
          Repellendus est quasi repudiandae, inventore quia ad eaque doloribus
          veritatis odio dolorum unde sunt amet adipisci illum. Minima numquam
          deserunt deleniti consectetur natus ex, sint et ea fuga animi aperiam
          placeat labore hic iure tempore ducimus est dolores veritatis unde
          ipsum quas nam temporibus! Porro voluptate, praesentium animi nemo
          dicta doloremque sapiente totam obcaecati alias impedit necessitatibus
          inventore sed nesciunt cum fugit laudantium amet.
        </p>
      </div>
      <div id="tax-profit-box-layout">
        <span>Already Holding Bitcoins ?</span>
        <div></div>
        <div id="tax-profit-box-container">
          <div id="calculate-profit">
            <div className="crypto-about-img">
              <img
                src="https://img.freepik.com/free-vector/gradient-stock-market-concept_23-2149166910.jpg?w=996&t=st=1710015324~exp=1710015924~hmac=3dc6e531ac0391c248375a27168686db1663365c7f5f8a75d92ba742bca2c1a3"
                alt="CalculateProfit"
              />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                marginTop: "1rem",
                marginLeft: "1rem",
                gap: "1rem",
              }}
            >
              <span className="label-calculate-redirect">
                Calculate your <br /> Profits
              </span>
              <button className="redirect-button-check-now">
                Check Now <i class="fa-solid fa-arrow-right arrow-icon"></i>
              </button>
            </div>
          </div>
          <div id="calculate-tax">
            <div className="crypto-about-img">
              <img
                src="https://img.freepik.com/free-photo/business-concept-with-graphic-holography_23-2149160929.jpg?w=996&t=st=1710015420~exp=1710016020~hmac=170bd967303f0218d8665037dea0737c6c34b0dc3b9b942c374da5690b4993d0"
                alt="Calulate Tax"
              />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "center",
                marginTop: "1rem",
                marginLeft: "1rem",
                gap: "1rem",
              }}
            >
              <span className="label-calculate-redirect">
                Calculate Your Tax <br />
                liability
              </span>
              <button className="redirect-button-check-now">
                Check Now <i class="fa-solid fa-arrow-right arrow-icon"></i>
              </button>
            </div>
          </div>
        </div>
        <div className="about-crypto-info" style={{ border: "none" }}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
            exercitationem maiores voluptatibus vel ad ipsam voluptas ipsum
            omnis, quaerat quibusdam voluptate itaque expedita eos soluta
            dolorem facilis repellat dicta nihil. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Possimus fuga beatae dolores quod
            exercitationem tempora doloremque aliquam esse, amet, aut voluptatem
            tenetur magnam explicabo unde. Mollitia quasi dolorum earum
            similique?
          </p>
        </div>
      </div>
    </div>
  );
}
