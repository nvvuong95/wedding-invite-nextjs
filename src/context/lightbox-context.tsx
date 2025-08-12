"use client";

import { Lightbox } from "@/components/lightbox";
import React, { useContext, useState } from "react";
// import Video from "yet-another-react-lightbox/plugins/video";

type LightboxProps = {
  isOpen?: boolean;
  index: number;
  slides: any[];
};

export const LightboxContext = React.createContext<{
  onDisplay: (props: LightboxProps) => void;
} | null>(null);

export const useLightbox = () => {
  const context = useContext(LightboxContext);
  if (!context) {
    throw new Error("useLightbox must be used within a LightboxProvider");
  }
  return context;
};

export const LightboxProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [lightboxProps, setLightboxProps] = useState<LightboxProps | null>(
    null
  );

  const onDisplay = (props: LightboxProps) => {
    setLightboxProps({ ...props, isOpen: true });
  };

  const contextValue = React.useMemo(() => ({ onDisplay }), []);

  return (
    <LightboxContext.Provider value={contextValue}>
      {children}
      {lightboxProps?.isOpen && (
        <Lightbox
          index={lightboxProps.index}
          slides={lightboxProps.slides}
          open={lightboxProps.isOpen}
          // disableThumbnails
          // plugins={[Video]}
          close={() =>
            setLightboxProps({
              ...lightboxProps,
              isOpen: false,
              index: -1,
              slides: [],
            })
          }
        />
      )}
    </LightboxContext.Provider>
  );
};
