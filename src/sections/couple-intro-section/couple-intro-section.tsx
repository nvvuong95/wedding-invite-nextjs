import { Box, Container, GridLegacy, Paper, Typography } from "@mui/material";

type IProps = {
  openGallery: (index: number) => void;
  openPopup: (popupId: string) => void;
};

export const CoupleIntroSection = ({ openGallery, openPopup }: IProps) => {
  return (
    <div id="SECTION358" className="ladi-section">
      <div className="ladi-section-background"></div>
      <div className="ladi-overlay"></div>
      <div className="ladi-container">
        <div id="IMAGE421" className="ladi-element">
          <div className="ladi-image">
            <div className="ladi-image-background"></div>
          </div>
        </div>
        <div id="HEADLINE467" className="ladi-element">
          <h3 className="ladi-headline">
            Văn Vương&nbsp; &amp; Ngọc Nhung
            <br />
          </h3>
        </div>
        <div id="GROUP516" className="ladi-element">
          <div className="ladi-group">
            <div id="HEADLINE470" className="ladi-element">
              <h3 className="ladi-headline">
                Nhà Trai
                <br />
              </h3>
            </div>
            <div id="PARAGRAPH567" className="ladi-element">
              <div className="ladi-paragraph">
                Ông:{" "}
                <span style={{ fontWeight: "bold" }}>Nguyễn Văn Thành</span>
                <br />
              </div>
              <div className="ladi-paragraph">
                Bà: <span style={{ fontWeight: "bold" }}>Nguyễn Thị Mai</span>
                <br />
              </div>
            </div>
            <div id="IMAGE424" className="ladi-element">
              <div className="ladi-image">
                <div className="ladi-image-background"></div>
              </div>
            </div>
            <div id="PARAGRAPH568" className="ladi-element">
              <div className="ladi-paragraph">
                Bà: <span style={{ fontWeight: "bold" }}>Nguyễn Thị Liên</span>
              </div>
            </div>
            <div id="HEADLINE471" className="ladi-element">
              <h3 className="ladi-headline">
                Nhà Gái
                <br />
              </h3>
            </div>
          </div>
        </div>
        <div id="GROUP515" className="ladi-element">
          <div className="ladi-group">
            <div id="GROUP513" className="ladi-element">
              <div className="ladi-group">
                <div id="BOX424" className="ladi-element">
                  <div className="ladi-box"></div>
                </div>
                <div data-action="true" id="IMAGE422" className="ladi-element">
                  <div className="ladi-image">
                    <div className="ladi-image-background"></div>
                  </div>
                </div>
              </div>
            </div>
            <div id="HEADLINE468" className="ladi-element">
              <h3 className="ladi-headline">
                Văn Vương&nbsp;
                <br />
              </h3>
            </div>
            <div id="PARAGRAPH569" className="ladi-element">
              <div className="ladi-paragraph">
                Đối với chúng mình hôn nhân không phải là đích đến cuối của tình
                yêu mà là khởi đầu của hạnh phúc.&nbsp;
                <br />
              </div>
            </div>
          </div>
        </div>
        <div id="GROUP517" className="ladi-element">
          <div className="ladi-group">
            <div id="GROUP514" className="ladi-element">
              <div className="ladi-group">
                <div id="BOX425" className="ladi-element">
                  <div className="ladi-box"></div>
                </div>
                <div data-action="true" id="IMAGE423" className="ladi-element">
                  <div className="ladi-image">
                    <div className="ladi-image-background"></div>
                  </div>
                </div>
              </div>
            </div>
            <div id="HEADLINE469" className="ladi-element">
              <h3 className="ladi-headline">
                Ngọc Nhung
                <br />
              </h3>
            </div>
            <div id="PARAGRAPH570" className="ladi-element">
              <div className="ladi-paragraph">
                Ở thời điểm phù hợp nhất, khoác lên mình bộ váy cưới đẹp nhất,
                gả cho người đáng tin cậy nhất, là anh.
                <br />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
