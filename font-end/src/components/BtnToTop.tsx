import { useEffect, useState } from "react";

const BtnToTop = () => {
  const [showBtn, setShowBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 200) {
        setShowBtn(true);
      } else {
        setShowBtn(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleGoToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  return (
   <>
   {showBtn && (
        <a className="scroll-to-top rounded" href="#page-top" onClick={handleGoToTop}>
          <i className="fas fa-angle-up"></i>
        </a>
      )}
   </>
  )
}

export default BtnToTop