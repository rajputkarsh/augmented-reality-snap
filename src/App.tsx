import { useEffect } from "react";
import { bootstrapCameraKit, createUserMediaSource } from "@snap/camera-kit";

function App() {
  useEffect(() => {
    const init = async () => {
      const cameraKit = await bootstrapCameraKit({
        apiToken:
          "eyJhbGciOiJIUzI1NiIsImtpZCI6IkNhbnZhc1MyU0hNQUNQcm9kIiwidHlwIjoiSldUIn0.eyJhdWQiOiJjYW52YXMtY2FudmFzYXBpIiwiaXNzIjoiY2FudmFzLXMyc3Rva2VuIiwibmJmIjoxNzA3MjE2ODM1LCJzdWIiOiJiM2YwZGIwYS1mNmRlLTQ5ZTYtOGI4My1jY2Q0Y2Y0MzBhOWJ-U1RBR0lOR342ODJhZDYzMS1kYWY5LTQ1MTQtYjgxNS1kMjM2NDdkMGQ3MzIifQ.h6X7Q-BJqN1VMkpOmbQ8bgDFdCtiM0vKSiXm7KXfbpI",
      });

      const canvas = document.getElementById("my-canvas");
      const session = await cameraKit.createSession({
        liveRenderTarget: canvas as HTMLCanvasElement,
        renderWhileTabHidden: true,
      });

      const source = await createUserMediaSource({ video: true });
      session.setSource(source);

      console.log(`here1`);

      const lens = await cameraKit.lensRepository.loadLens(
        "709f920d-5520-494d-bcab-eba0189c7381",
        "7faed4f9-441e-4266-be8c-55d74c74fdc2"
      );
      console.log(`here2`);
      await session.applyLens(lens);

      console.log(`here3`);
      await session.play();
      console.log("Lens rendering has started!");
    };

    init();
  }, []);

  return (
    <div className="rootdiv">
      <nav className="css-69o760">
        <div className="css-k008qs">
          <div className="css-1blg45o">
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              viewBox="0 0 500 500"
              width="32"
              height="32"
            >
              <g id="Layer_1">
                <g>
                  <g>
                    <path
                      d="M484.6,369.3c-2-6.8-11.9-11.6-11.9-11.6l0,0c-0.9-0.5-1.7-0.9-2.4-1.3c-16.4-7.9-30.8-17.4-43.1-28.2
                  c-9.8-8.7-18.2-18.2-25-28.4c-8.2-12.4-12.1-22.8-13.8-28.4c-0.9-3.7-0.8-5.1,0-7c0.6-1.6,2.5-3.1,3.4-3.8
                  c5.5-3.9,14.4-9.7,19.9-13.2c4.7-3.1,8.8-5.7,11.2-7.4c7.7-5.4,12.9-10.8,16-16.7c4-7.6,4.5-16,1.4-24.3
                  c-4.2-11.1-14.6-17.8-27.8-17.8c-2.9,0-6,0.3-9,1c-7.6,1.6-14.8,4.3-20.8,6.7c-0.4,0.2-0.9-0.2-0.9-0.6
                  c0.6-14.9,1.3-34.9-0.3-53.9c-1.5-17.2-5-31.7-10.8-44.3c-5.8-12.7-13.4-22.1-19.3-28.9c-5.7-6.5-15.5-16-30.5-24.5
                  c-21-12-45-18.1-71.1-18.1c-26.1,0-50,6.1-71.1,18.1c-15.8,9-25.9,19.2-30.5,24.5c-5.9,6.8-13.5,16.2-19.3,28.9
                  c-5.8,12.6-9.3,27.1-10.8,44.3c-1.6,19.1-1,37.5-0.3,53.9c0,0.5-0.5,0.8-0.9,0.6c-6-2.3-13.2-5-20.7-6.7c-3-0.7-6-1-9-1
                  c-13.2,0-23.6,6.7-27.8,17.8c-3.1,8.3-2.7,16.7,1.4,24.3c3.1,5.9,8.4,11.4,16,16.7c2.4,1.7,6.4,4.3,11.2,7.4
                  c5.3,3.5,14,9.1,19.5,13c0.7,0.5,3,2.3,3.8,4.1c0.8,2,0.9,3.4-0.1,7.3c-1.7,5.7-5.6,15.9-13.7,28.1c-6.8,10.2-15.2,19.7-25,28.4
                  C60.5,339,46,348.5,29.7,356.5c-0.8,0.4-1.7,0.8-2.7,1.4l0,0c0,0-9.8,5-11.6,11.4c-2.7,9.5,4.5,18.4,11.9,23.2
                  c12.1,7.8,26.9,12,35.4,14.3c2.4,0.6,4.5,1.2,6.5,1.8c1.2,0.4,4.3,1.6,5.6,3.3c1.7,2.1,1.9,4.8,2.5,7.8v0c0.9,5,3,11.2,9.2,15.5
                  c6.8,4.7,15.5,5,26.4,5.5c11.5,0.4,25.8,1,42.1,6.4c7.6,2.5,14.4,6.7,22.4,11.6c16.6,10.2,37.2,22.9,72.5,22.9
                  c35.3,0,56.1-12.8,72.8-23c7.9-4.8,14.7-9,22.1-11.5c16.3-5.4,30.6-5.9,42.1-6.4c11-0.4,19.6-0.7,26.4-5.5
                  c6.6-4.6,8.6-11.4,9.4-16.6c0.5-2.5,0.8-4.8,2.3-6.7c1.2-1.6,4.1-2.7,5.4-3.2c2-0.6,4.2-1.2,6.7-1.9c8.6-2.3,19.3-5,32.3-12.4
                  C485.2,385.6,486.3,374.7,484.6,369.3z"
                      className="css-1gd5wfv"
                    ></path>
                  </g>
                  <path
                    d="M498.2,364c-3.5-9.5-10.1-14.5-17.6-18.7c-1.4-0.8-2.7-1.5-3.8-2c-2.2-1.2-4.5-2.3-6.8-3.5
              c-23.5-12.5-41.8-28.2-54.6-46.8c-4.3-6.3-7.3-12-9.4-16.6c-1.1-3.1-1-4.9-0.3-6.5c0.6-1.2,2.2-2.5,3-3.1c4-2.7,8.2-5.4,11-7.2
              c5-3.3,9-5.8,11.6-7.6c9.6-6.7,16.4-13.9,20.6-21.9c5.9-11.3,6.7-24.2,2.1-36.3c-6.4-16.8-22.3-27.3-41.5-27.3
              c-4,0-8,0.4-12.1,1.3c-1.1,0.2-2.1,0.5-3.1,0.7c0.2-11.4-0.1-23.6-1.1-35.6c-3.6-42-18.3-64-33.7-81.6c-6.4-7.3-17.5-18-34.2-27.6
              C305.1,10.6,278.8,3.9,250,3.9c-28.7,0-55,6.7-78.3,20c-16.8,9.6-27.9,20.3-34.3,27.6c-15.3,17.5-30,39.6-33.7,81.6
              c-1,11.9-1.3,24.1-1.1,35.6c-1-0.3-2.1-0.5-3.1-0.7c-4-0.9-8.1-1.3-12.1-1.3c-19.3,0-35.2,10.4-41.5,27.3
              c-4.6,12.1-3.8,25,2.1,36.3c4.2,8,11,15.2,20.6,21.9c2.6,1.8,6.6,4.4,11.6,7.6c2.7,1.8,6.7,4.3,10.6,6.9c0.6,0.4,2.7,1.9,3.4,3.4
              c0.8,1.7,0.8,3.5-0.4,6.8c-2.1,4.6-5,10.1-9.2,16.3c-12.4,18.2-30.3,33.6-53,46c-12,6.4-24.6,10.6-29.9,25
              c-4,10.9-1.4,23.2,8.8,33.6l0,0c3.3,3.6,7.5,6.8,12.8,9.7c12.4,6.9,23,10.2,31.3,12.5c1.5,0.4,4.8,1.5,6.3,2.8
              c3.7,3.2,3.2,8.1,8.1,15.2c3,4.4,6.4,7.4,9.2,9.4c10.3,7.1,21.9,7.6,34.2,8c11.1,0.4,23.7,0.9,38.1,5.7c6,2,12.1,5.8,19.3,10.2
              c17.2,10.6,40.8,25,80.2,25c39.4,0,63.1-14.5,80.5-25.2c7.1-4.4,13.3-8.1,19-10c14.4-4.7,27-5.2,38.1-5.7
              c12.3-0.5,23.9-0.9,34.2-8c3.2-2.2,7.3-5.9,10.5-11.5c3.5-6,3.4-10.2,6.8-13.2c1.4-1.2,4.3-2.2,5.9-2.7
              c8.4-2.3,19.1-5.7,31.7-12.6c5.6-3.1,10-6.5,13.4-10.3c0,0,0.1-0.1,0.1-0.1C499.7,386.6,502.1,374.6,498.2,364z M463.2,382.8
              c-21.4,11.8-35.6,10.5-46.6,17.7c-9.4,6-3.8,19.1-10.7,23.8c-8.4,5.8-33.2-0.4-65.1,10.2c-26.4,8.7-43.2,33.8-90.7,33.8
              c-47.6,0-64-25-90.7-33.8c-32-10.6-56.8-4.4-65.1-10.2c-6.8-4.7-1.3-17.7-10.7-23.8c-11-7.1-25.3-5.9-46.6-17.7
              c-13.6-7.5-5.9-12.2-1.4-14.4c77.4-37.5,89.8-95.4,90.3-99.7c0.7-5.2,1.4-9.3-4.3-14.6c-5.5-5.1-30.1-20.3-36.9-25
              c-11.3-7.9-16.2-15.7-12.6-25.4c2.5-6.7,8.8-9.2,15.4-9.2c2,0,4.1,0.2,6.1,0.7c12.4,2.7,24.4,8.9,31.3,10.6c1,0.2,1.8,0.3,2.6,0.3
              c3.7,0,5-1.9,4.8-6.1c-0.8-13.5-2.7-39.9-0.6-64.5c2.9-33.9,13.9-50.7,26.9-65.6c6.2-7.1,35.5-38.1,91.6-38.1
              c56.2,0,85.3,30.9,91.6,38.1c13,14.9,23.9,31.7,26.9,65.6c2.1,24.6,0.3,51-0.6,64.5c-0.3,4.5,1.1,6.1,4.8,6.1
              c0.8,0,1.6-0.1,2.6-0.3c6.9-1.7,19-7.9,31.3-10.6c2-0.4,4.1-0.7,6.1-0.7c6.6,0,12.8,2.5,15.4,9.2c3.7,9.7-1.3,17.5-12.6,25.4
              c-6.8,4.7-31.3,19.9-36.9,25c-5.7,5.3-5,9.4-4.3,14.6c0.6,4.4,12.9,62.2,90.3,99.7C469.1,370.6,476.8,375.3,463.2,382.8z"
                  ></path>
                </g>
              </g>
            </svg>
            <div className="css-1rw0hrb">Camera Kit Web Samples</div>
          </div>
        </div>
        <div className="css-1py5h21"></div>
        <div className="css-k008qs"></div>
      </nav>
      {/* <select
        id="lens-select"
        className="dropdown-select"
        data-testid="lens-select"
      >
        <option value="">Choose a Lens...</option>
        <option value="54334260897" data-testid="Audio Particles">
          Audio Particles
        </option>
        <option value="57254381070" data-testid="Cartoon 3D Style">
          Cartoon 3D Style
        </option>
        <option value="57300130955" data-testid="Duckling on a Nose">
          Duckling on a Nose
        </option>
        <option value="39353390907" data-testid="Emoji Spin">
          Emoji Spin
        </option>
        <option value="55482321074" data-testid="Finger Drawing">
          Finger Drawing
        </option>
        <option value="62332610876" data-testid="Fire Body">
          Fire Body
        </option>
        <option value="60158540879" data-testid="Lifestyle Preferences">
          Lifestyle Preferences
        </option>
        <option value="56022051067" data-testid="Neon Hands">
          Neon Hands
        </option>
        <option value="60625912137" data-testid="Pink Beanie">
          Pink Beanie
        </option>
        <option value="24974717232" data-testid="Pink Cat">
          Pink Cat
        </option>
        <option value="23575917241" data-testid="Purple Cartoon Cat">
          Purple Cartoon Cat
        </option>
        <option value="42875130947" data-testid="Snowy Hearts">
          Snowy Hearts
        </option>
        <option value="62723960876" data-testid="Twerking Hamster">
          Twerking Hamster
        </option>
        <option value="28767547228" data-testid="Zombie Eyes">
          Zombie Eyes
        </option>
      </select> */}
      <canvas id="my-canvas"></canvas>
    </div>
  );
}

export default App;
