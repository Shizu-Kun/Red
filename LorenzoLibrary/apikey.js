const ariekey = '-' // INPUT API KEY https://ariepulsa.com
const nomorKu = '6283825536262@s.whatsapp.net' //Ganti Nomormu

// SETTING KEUNTUNGAN MEMBER BERDASARKAN PERSEN (%)
const prmember = '5'
const prgold = '4'
const prplatinum = '3'
const prpartner = '2'

// API PAYDISINI
const keypaydis = '-'
const merchpaydis = '' //Kosongkan Jika Belum Verifikasi Merchant
const servpaydis = '11' //Buat 11 Jika Belum Verifikasi Merchant
const batas_time = '300'; //Batas waktu pembayaran (detik) minimal 1800 30 menit dan maximal 10800 3 jam
const fee_cus = '1'; //1 fee ditanggung customer 2 fee ditanggung merchant
const fee_owner = 350; //Fee Untuk Kamu Buat Meringankan Biaya Penarikan

module.exports = {
    ariekey,
    prmember,
    prgold,
    prplatinum,
    prpartner,
    keypaydis,
    merchpaydis,
    servpaydis,
    batas_time,
    fee_owner,
    fee_cus,
    nomorKu
}