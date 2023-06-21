import { Text } from "@nextui-org/react";
import "../styles/404.css";

export default function NotFound() {
  return (
    <main className="page_404">
      <div>
        <div>
          <div>
            <div className="text-center">
              <div className="four_zero_four_bg">
                <Text
                  h1
                  style={{ fontSize: "5rem" }}
                  className="text-center"
                  id="text404"
                >
                  404
                </Text>
              </div>
              <div className="contant_box_404">
                <h3 className="h2">Looks like you got lost</h3>
                <p>Page you're looking for is not available</p>
                <a href="/" className="link_404">
                  Go to Home
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
