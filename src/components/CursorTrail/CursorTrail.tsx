import { useEffect, useState } from "react";
import { Box, Flex, Image } from "theme-ui";

const CursorWithDollar = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [trailPosition, setTrailPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    let inactivityTimeout: ReturnType<typeof setTimeout>;

    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
      clearTimeout(inactivityTimeout);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearTimeout(inactivityTimeout);
    };
  }, []);

  useEffect(() => {
    setTrailPosition((prev) => ({
      x: prev.x + (cursorPosition.x - prev.x) * 0.2,
      y: prev.y + (cursorPosition.y - prev.y) * 0.2,
    }));
  }, [cursorPosition]);

  return (
    <>
      <Box
        sx={{
          position: "fixed",
          width: "10px",
          height: "10px",
          borderRadius: "50%",
          pointerEvents: "none",
          transform: "translate(-50%, -50%)",
          left: `${cursorPosition.x}px`,
          top: `${cursorPosition.y}px`,
          zIndex: 1001,
        }}
      />

      <Flex
        sx={{
          position: "fixed",
          fontSize: "24px",
          color: "green",
          pointerEvents: "none",
          transform: "translate(-50%, -50%)",
          left: `${trailPosition.x}px`,
          top: `${trailPosition.y}px`,
          zIndex: 999,
          width: "70px",
        }}
      >
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Obverse_of_the_series_2009_%24100_Federal_Reserve_Note.jpg/640px-Obverse_of_the_series_2009_%24100_Federal_Reserve_Note.jpg"
          alt="$"
          sx={{ objectFit: "contain", transform: "translate(60%, 100%)" }}
        />
      </Flex>
    </>
  );
};

export default CursorWithDollar;
