import { Col, Container, Row } from 'react-bootstrap';

export default function AboutUs() {
  return (
    <Container id='about' className='mt-2'>
      <Row>
        <Col>
          <Container className='header-section'>
            <h1>ABOUT US</h1>
            <h6>
              Media and advertising company that helps you enlarge the business
            </h6>
          </Container>
        </Col>
      </Row>
      <Row>
        <Col>
          <Container className='aboutus-text'>
            <h6>
              <p>
                Kisah kami dimulai pada tahun 2006 di Jakarta dengan penawaran
                iklan untuk <em>company branding</em> dan penerbitan layanan
                penuh untuk Persatuan Perusahaan Air Minum Indonesia (PERPAMSI)
                dan Perusahaan Daerah Air Minum (PDAM).
              </p>
              <p>
                Sepanjang perjalanan karier, kami bertemu orang-orang baik yang
                mencoba melakukan pekerjaannya dengan integritas dan kegigihan
                tinggi dengan kepribadian yang luar biasa. Menyadari kesamaan
                nilai yang kami anut, dan melihat bahwa kami dapat menjadi tim
                yang dapat bekerja sama, kami memutuskan untuk mendirikan
                perusahaan periklanan PT Agung Berkah Rejeki Abadi (ABRA) pada
                tahun 2022 dengan Akta Pendirian No. 01 oleh Notaris Ninik
                Sukadarwati, S.H. yang berkedudukan di Jakarta Timur setelah
                mencapai banyak hal selama beberapa tahun dalam penerbitan buku
                agenda kerja eksklusif, buku profil, buku profil/direktori,
                kalender, perayaan acara besar perusahaan, surat kabar, dan
                media luar ruang.
              </p>

              <p>
                Saat ini ABRA bergerak dalam media dan periklanan yang membantu
                perusahaan Anda memperluas bisnis yang dijalankan dengan
                nilai-nilai etika bisnis yang profesional. Dengan mengandalkan
                konsep dan tim desain, kami menawarkan bentuk kerja sama dalam
                hal <em>advertising</em> dan <em>company branding</em> dalam
                media cetak. Sesuai dengan visi misi kami, kami mampu melayani
                dan memenuhi kebutuhan Anda mulai dari pengumpulan sumber data
                hingga naik cetak dengan kualitas yang memuaskan sesuai dengan
                ketepatan waktu, efektivitas, dan efisiensi dengan biaya yang
                kompetitif.
              </p>
            </h6>
          </Container>
        </Col>
      </Row>
    </Container>
  );
}
