export default function HomePage() {
  return (
    <div className="container pt-4">
      <h1>React Profile</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
          tenetur maiores, dolor iusto dolorum ullam, natus deleniti blanditiis
          impedit suscipit sed magnam alias in, repellat expedita hic explicabo
          architecto soluta. About us Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Velit voluptate exercitationem quaerat pariatur
          mollitia, excepturi, voluptatem eveniet a dolor nobis ex veniam totam
          nostrum temporibus ad omnis nam rerum eligendi.
        </p>
      <section className="features-icons bg-light text-center m-4">
        <div className="container">
          <div className="row p-2">
            <div className="col-lg-4">
              <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                <div className="features-icons-icon d-flex">
                  <i className="bi-window m-auto text-primary" />
                </div>
                <h3>Links to my Github</h3>
                <p className="lead mb-0">Here is a link to my Github</p>
                <a>https://github.com/tjansen34/react-portfolio</a>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                <div className="features-icons-icon d-flex">
                  <i className="bi-layers m-auto text-primary" />
                </div>
                <h3>Snippets of my work</h3>
                 <img
                  src="../img/img1.jpg" 
                  alt="Test image"
                  style={{ width: "100px", height: "100px" }}
                />
                <p className="lead mb-0">in the works</p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="features-icons-item mx-auto mb-0 mb-lg-3">
                <div className="features-icons-icon d-flex">
                  <i className="bi-terminal m-auto text-primary" />
                </div>
                <h3>undefined</h3>
                <p className="lead mb-0">to be built</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
        tenetur maiores, dolor iusto dolorum ullam, natus deleniti blanditiis
        impedit suscipit sed magnam alias in, repellat expedita hic explicabo
        architecto soluta. About us Lorem ipsum, dolor sit amet consectetur
        adipisicing elit. Velit voluptate exercitationem quaerat pariatur
        mollitia, excepturi, voluptatem eveniet a dolor nobis ex veniam totam
        nostrum temporibus ad omnis nam rerum eligendi.
      </p>
    </div>
  );
}
