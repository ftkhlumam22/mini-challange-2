// Fungsi DumbWMerchBerkah
const DumbWMerchBerkah = (price) => {
  const discount = 0.25;
  const minimal_price = 50000;
  const max_discount = 20000;

  if (price <= minimal_price) {
    return console.log("Total Belanja Anda Tidak Memenuhi Kriteria");
  }

  let discount_now = price * discount;

  if (discount_now > max_discount) {
    discount_now = max_discount;
  }

  let price_now = price - discount_now;

  return console.log(`
      - Total Belanja : Rp ${price}
      - Discount : 25%
      - Potongan : ${discount_now}
      - Total Pembayaran : ${price_now}
      `);
};

// Fungsi DumbMerchMurahBanget
const DumbMerchMurahBanget = (price) => {
  const discount = 0.5;
  const minimal_price = 70000;
  const max_discount = 45000;

  if (price <= minimal_price) {
    return console.log("Total Belanja Anda Tidak Memenuhi Kriteria");
  }

  let discount_now = price * discount;

  if (discount_now > max_discount) {
    discount_now = max_discount;
  }

  let price_now = price - discount_now;

  return console.log(`
        - Total Belanja : Rp ${price}
        - Discount : 50%
        - Potongan : ${discount_now}
        - Total Pembayaran : ${price_now}
        `);
};

DumbWMerchBerkah(80000);
DumbMerchMurahBanget(120000);
