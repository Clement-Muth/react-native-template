import React, { FC, ReactNode, useCallback, useEffect, useMemo, useRef } from "react";
import { StyleSheet } from "react-native";
import { BottomSheetScrollView, BottomSheetModalProvider, BottomSheetModal } from "@gorhom/bottom-sheet";

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1
  }
});

export interface ModalBottomProps {
  open?: boolean;
  onClose: () => void;
  children?: ReactNode;
}

const ModalBottom: FC<ModalBottomProps> = ({ open, onClose, children }) => {
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const snapPoints = useMemo(() => ["25%", "80%"], []);

  useEffect(() => {
    open && bottomSheetModalRef.current?.present();
  }, [open]);

  const handleSheetChanges = useCallback((index: number) => {
    console.log("handleSheetChanges", index);
    if (index == -1) onClose();
  }, []);

  return (
    <BottomSheetModalProvider>
      <BottomSheetModal
        ref={bottomSheetModalRef}
        index={1}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}
        backgroundStyle={{
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 8
          },
          shadowOpacity: 0.46,
          shadowRadius: 11.14,

          elevation: 17
        }}
      >
        <BottomSheetScrollView
          style={{
            ...styles.contentContainer
          }}
        >
          {children}
        </BottomSheetScrollView>
      </BottomSheetModal>
    </BottomSheetModalProvider>
  );
};

export default ModalBottom;
