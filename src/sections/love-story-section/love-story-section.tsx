import FadeInOnScroll from "@/components/FadeInOnScroll";

const LANGUAGE_TEXT = {
  ko: {
    headline: "사랑 이야기",
    meetingFate: "만남과 인연",
    yearsTogether: "함께한 시간",
    weddingDay: "우리의 결혼식",
    meetingFateDesc:
      "사랑은 마음이 공명하는 순간, 두 영혼이 조화를 이루며 세상이 더 아름답게 보이는 것입니다. 우리 사이의 거리가 천 걸음이라면, 당신이 첫 걸음을 내딛는 순간 나는 나머지 아홉백 아흔아홉 걸음을 당신에게 다가갈 것입니다.",
    yearsTogetherDesc:
      "행복은 청춘의 가장 아름다운 시기에 최고의 사람을 만나 함께 나이 들어가며, 서로를 위해 풍요롭고 아름다운 미래를 만들어가는 것입니다.",
    weddingDayDesc:
      "인연은 매우 신비로운 것입니다. 언젠가 인생의 모든 혼란이 해답을 찾게 되고, 모든 것이 제자리를 찾는 순간이 옵니다. 서로를 위해 태어난 사람들은 결국 서로를 만나 인생에서 함께 하게 됩니다.",
  },
  vi: {
    headline: "Love Story",
    meetingFate: "GẶP GỠ VÀ DUYÊN PHẬN",
    yearsTogether: "NĂM THÁNG YÊU NHAU",
    weddingDay: "NGÀY MÌNH CHUNG ĐÔI",
    meetingFateDesc:
      "Tình yêu là sự rung cảm của một tâm hồn khi gặp một tâm hồn đồng điệu, là sự hòa nhịp của hai trái tim, làm người ta nhìn thấy mọi vật tươi đẹp hơn. Khoảng cách giữa chúng ta nếu là một ngàn bước thì chỉ cần em đi bước đầu tiên, anh sẽ là người đi về phía em chín trăm chín chín bước còn lại.",
    yearsTogetherDesc:
      "Hạnh phúc là khi gặp được người tuyệt nhất ở những giai đoạn đẹp nhất của tuổi thanh xuân và cùng nhìn nhau già đi, vì nhau mà cố gắng xây dựng một tương lai sung túc, tốt đẹp.",
    weddingDayDesc:
      "Duyên phận là một điều vô cùng thú vị. Đến một lúc nào đó, tất cả những bối rối trong cuộc đời sẽ có câu trả lời. Đó sẽ là lúc mọi chuyện lại về đúng chỗ của nó. Những người sinh ra dành cho nhau, rồi sẽ nhìn thấy nhau và nắm lấy nhau trong cuộc đời này.",
  },
};

const IMAGE_BACKGROUND_URL =
  "https://ik.imagekit.io/n7dpnbw3v/wedding/pre_wedding/4M8A9503.JPG?updatedAt=1754443034310";

type LoveStorySectionProps = {
  lang?: "vi" | "ko";
};

export const LoveStorySection = ({ lang = "vi" }: LoveStorySectionProps) => {
  return (
    <div id="SECTION360" className="ladi-section">
      <div
        className="ladi-section-background"
        style={{
          backgroundImage: `url("${IMAGE_BACKGROUND_URL}")`,
          backgroundSize: "contain",
        }}
      ></div>
      <div className="ladi-overlay"></div>
      <div className="ladi-container">
        <FadeInOnScroll
          direction="down"
          delay={0.5}
          id="HEADLINE474"
          className="ladi-element"
        >
          <h3 className="ladi-headline">{LANGUAGE_TEXT[lang].headline}</h3>
        </FadeInOnScroll>
        <FadeInOnScroll
          direction="left"
          delay={1}
          id="GROUP522"
          className="ladi-element"
        >
          <div className="ladi-group">
            <div id="IMAGE435" className="ladi-element">
              <div className="ladi-image">
                <div
                  className="ladi-image-background"
                  style={{
                    backgroundImage: `url("https://ik.imagekit.io/n7dpnbw3v/wedding/the_first_day.png")`,
                  }}
                ></div>
              </div>
            </div>
            <div id="PARAGRAPH571" className="ladi-element">
              <div className="ladi-paragraph">
                {LANGUAGE_TEXT[lang].meetingFate}
              </div>
            </div>
            <div id="PARAGRAPH572" className="ladi-element">
              <div className="ladi-paragraph">
                {LANGUAGE_TEXT[lang].meetingFateDesc}
              </div>
            </div>
          </div>
        </FadeInOnScroll>
        <FadeInOnScroll
          direction="right"
          delay={1}
          id="GROUP523"
          className="ladi-element"
        >
          <div className="ladi-group">
            <div id="IMAGE436" className="ladi-element">
              <div className="ladi-image">
                <div
                  className="ladi-image-background"
                  style={{
                    backgroundImage: `url("https://ik.imagekit.io/n7dpnbw3v/wedding/the_love_day.png")`,
                  }}
                ></div>
              </div>
            </div>
            <div id="PARAGRAPH573" className="ladi-element">
              <div className="ladi-paragraph">
                {LANGUAGE_TEXT[lang].yearsTogether}
              </div>
            </div>
            <div id="PARAGRAPH574" className="ladi-element">
              <div className="ladi-paragraph">
                {LANGUAGE_TEXT[lang].yearsTogetherDesc}
              </div>
            </div>
          </div>
        </FadeInOnScroll>
        <FadeInOnScroll
          direction="up"
          delay={1.5}
          id="GROUP524"
          className="ladi-element"
        >
          <div className="ladi-group">
            <div id="IMAGE437" className="ladi-element">
              <div className="ladi-image">
                <div
                  className="ladi-image-background"
                  style={{
                    backgroundImage: `url("https://ik.imagekit.io/n7dpnbw3v/wedding/the_wedding_day.png")`,
                  }}
                ></div>
              </div>
            </div>
            <div id="PARAGRAPH575" className="ladi-element">
              <div className="ladi-paragraph">
                {LANGUAGE_TEXT[lang].weddingDay}
              </div>
            </div>
            <div id="PARAGRAPH576" className="ladi-element">
              <div className="ladi-paragraph">
                {LANGUAGE_TEXT[lang].weddingDayDesc}
              </div>
            </div>
          </div>
        </FadeInOnScroll>
      </div>
    </div>
  );
};
