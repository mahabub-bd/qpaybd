import styles from "@/styles/style";

const features = () => {
  return (
    <div className={styles.boxWidth}>
      <h1 className={`text-center ${styles.heading2} qpay-gradient`}>
        Key Features & Services
      </h1>

      <div className={`mx-auto flex flex-col items-center ${styles.paddingY}`}>
        <p className={styles.paragraph}>Account/Card Balance Check</p>
        <p className={styles.paragraph}>
          Multiple bank account and card tagging
        </p>
        <p className={styles.paragraph}> Inter-bank Fund transfer </p>
        <p className={styles.paragraph}> Bill payment </p>
        <p className={styles.paragraph}> Bangla QR Payment transaction </p>
        <p className={styles.paragraph}>
          Online payment for buying goods and services
        </p>
        <p className={styles.paragraph}> Instant Transaction Control </p>

        <p className={styles.paragraph}> Transaction history </p>
      </div>
    </div>
  );
};

export default features;
