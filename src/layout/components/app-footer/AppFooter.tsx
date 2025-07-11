import { Column, Grid } from "@carbon/react";

import styles from "./AppFooter.module.scss";

export function AppFooter() {
  return (
    <Grid as="footer" className={styles.footer}>
      <Column
        sm={4}
        md={{ span: 3, start: 1 }}
        lg={{ span: 6, start: 1 }}
        className={styles.leftColumn}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas et
        tincidunt urna, eget iaculis quam. Aenean id pellentesque orci. Orci
        varius natoque penatibus et magnis dis parturient montes, nascetur
        ridiculus mus. Duis at quam volutpat, tempor nulla et, egestas dui.
        Nulla vehicula arcu orci, eu ultrices enim rutrum sit amet.
      </Column>

      <Column
        sm={4}
        md={{ span: 3, end: 9 }}
        lg={{ span: 6, end: 17 }}
        className={styles.rightColumn}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
        finibus risus sit amet feugiat tempor. Integer ac velit at sem auctor
        mollis. Proin varius massa vitae neque venenatis imperdiet. Suspendisse
        semper tellus sit amet turpis sagittis viverra.
      </Column>
    </Grid>
  );
}
