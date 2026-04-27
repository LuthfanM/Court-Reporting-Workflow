import { useEffect, useRef, useState } from "react";
import { headerProfileMenuItems } from "@/helpers/config/HeaderMenuConfig";
import { styles } from "./HeaderProfileMenu.styles";

type HeaderProfileMenuProps = {
  name: string;
  imageUrl?: string;
};

export function HeaderProfileMenu({ name, imageUrl }: HeaderProfileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  const initial = name.trim().charAt(0).toUpperCase();

  function handleMenuClick(value: string) {
    setIsOpen(false);

    if (value === "profile") {
      console.log("Open profile");
      return;
    }

    if (value === "logout") {
      console.log("Log out");
      return;
    }
  }

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={wrapperRef} style={styles.wrapper}>
      <button
        type="button"
        style={styles.profileButton}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {imageUrl ? (
          <img src={imageUrl} alt={`${name} profile`} style={styles.avatar} />
        ) : (
          <span style={styles.avatarFallback}>{initial}</span>
        )}

        <span style={styles.name}>{name}</span>
      </button>

      {isOpen && (
        <div style={styles.menu}>
          {headerProfileMenuItems.map((item) => (
            <button
              key={item.value}
              type="button"
              style={styles.menuItem}
              onClick={() => handleMenuClick(item.value)}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

