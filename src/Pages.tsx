import React from "react";
import { Link } from "react-router-dom";
import { Icon, InlineIcon } from "@iconify/react";
import fastFoodOutline from "@iconify-icons/ion/fast-food-outline";
import shoppingCartOutlined from "@iconify-icons/ant-design/shopping-cart-outlined";
import websiteIcon from "@iconify-icons/whh/website";
import { Timeline, StyledOcticon } from "@primer/components";
export const Kasir = () => (
  <div>
    <div className="row">
      <div className="col-12 col-md-7">
        <img
          className="img-fluid rounded"
          width="100%"
          src="https://1.bp.blogspot.com/-H42dYAX8K7o/XzpTSWl9kZI/AAAAAAAALG0/q201upeuQq00VNG_M2gDIRPVswz26Sg7wCLcBGAsYHQ/s910/aplikasi%2Btoko%2Bonline%2Bweb%2Bapp.jpg"
        />
      </div>
      <div className="col-12 col-md-5 p-3 p-md-5">
        <div className="shadow rounded p-3 p-md-5">
          <h3>Hello World !!</h3>
          <p>
            Selamat datang di blog untuk kebutuhan mesin kasir dan aplikasi
            anda, aplikasi toko, mesin kasir online,aplikasi restoran , website
            modern , web app all in one ada disini.
          </p>
          <Link className="btn bg-purple col-12 btn-lg text-white" to="/webapp">
            Get Started
          </Link>
        </div>
      </div>
    </div>
  </div>
);
export const Contact = () => (
  <div>
    <div className="row">
      <div className="col-12 col-md-3 p-3 p-md-5" />
      <div className="col-12 col-md-6 p-3 p-md-5 text-center">
        <div className="shadow rounded p-3 p-md-5">
          <h3>Contact Us.</h3>
          <hr />
          <p>
            <small>
              Order layanan : pilih paket dan lakukan transaksi sesuai dengan
              nominal order <br />
              Pembayaran bank BCA 8290363021 / Rica Anggraini
            </small>
          </p>
          <p>
            <small>
              Hubungi kami untuk konsultasi dan pertanyaan mengenai layanan
              kami.
            </small>
          </p>
          <a href="https://wa.me/6285646104747" className="btn btn-outline-success">
            WhatsApp
          </a>{" "}
          <a href="mailto:axcora@gmail.com" className="btn btn-outline-danger">
            Email
          </a>{" "}
          <a href="tel:+6285331361404" className="btn btn-outline-primary">
            Call us
          </a>
        </div>
      </div>
    </div>
  </div>
);
export const Webapp = () => (
  <div>
    <div className="row">
      <div className="col-12 col-md-4 p-3 p-md-5">
        <div className=" p-3 p-md-5 shadow rounded">
          <h3>Restaurant Apps</h3>
          <Timeline>
            <Timeline.Item>
              <Timeline.Badge className="bg-purple text-white">
                <Icon icon={fastFoodOutline} />
              </Timeline.Badge>
              <Timeline.Body>
                <Link to="/restox" fontWeight="bold" className="text-light">
                  Resto-X Web Apps
                </Link>
              </Timeline.Body>
            </Timeline.Item>
            <Timeline.Item>
              <Timeline.Badge className="bg-purple text-white">
                <Icon icon={fastFoodOutline} />
              </Timeline.Badge>
              <Timeline.Body>
                <Link to="/dxresto" fontWeight="bold" className="text-light">
                  DX-Resto Web Apps
                </Link>
              </Timeline.Body>
            </Timeline.Item>
            <Timeline.Item>
              <Timeline.Badge className="bg-purple text-white">
                <Icon icon={fastFoodOutline} />
              </Timeline.Badge>
              <Timeline.Body>
                <Link to="/boostresto" fontWeight="bold" className="text-light">
                  Boosterpos Resto Apps
                </Link>
              </Timeline.Body>
            </Timeline.Item>
            <Timeline.Item>
              <Timeline.Badge className="bg-purple text-white">
                <Icon icon={fastFoodOutline} />
              </Timeline.Badge>
              <Timeline.Body>
                <Link to="/sipresto" fontWeight="bold" className="text-light">
                  Sip Resto Web Apps
                </Link>
              </Timeline.Body>
            </Timeline.Item>
            <Timeline.Item>
              <Timeline.Badge className="bg-purple text-white">
                <Icon icon={fastFoodOutline} />
              </Timeline.Badge>
              <Timeline.Body>
                <Link to="/funresto" fontWeight="bold" className="text-light">
                  Fun Resto Web Apps
                </Link>
              </Timeline.Body>
            </Timeline.Item>
            <Timeline.Item>
              <Timeline.Badge className="bg-purple text-white">
                <Icon icon={fastFoodOutline} />
              </Timeline.Badge>
              <Timeline.Body>
                <Link to="/zresto" fontWeight="bold" className="text-light">
                  Z-Resto Web Apps
                </Link>
              </Timeline.Body>
            </Timeline.Item>
          </Timeline>
        </div>
      </div>
      <div className="col-12 col-md-4 p-3 p-md-5">
        <div className=" p-3 p-md-5 shadow rounded">
          <h3>Toko Minimarket</h3>
          <Timeline>
            <Timeline.Item>
              <Timeline.Badge className="bg-purple text-white">
                <Icon icon={shoppingCartOutlined} />
              </Timeline.Badge>
              <Timeline.Body>
                <Link to="/posx" fontWeight="bold" className="text-light">
                  POS-X Web Apps
                </Link>
              </Timeline.Body>
            </Timeline.Item>
            <Timeline.Item>
              <Timeline.Badge className="bg-purple text-white">
                <Icon icon={shoppingCartOutlined} />
              </Timeline.Badge>
              <Timeline.Body>
                <Link to="/multipos" fontWeight="bold" className="text-light">
                  Multipos Web Apps
                </Link>
              </Timeline.Body>
            </Timeline.Item>
            <Timeline.Item>
              <Timeline.Badge className="bg-purple text-white">
                <Icon icon={shoppingCartOutlined} />
              </Timeline.Badge>
              <Timeline.Body>
                <Link to="/lava" fontWeight="bold" className="text-light">
                  Lava Apps Web Apps
                </Link>
              </Timeline.Body>
            </Timeline.Item>
            <Timeline.Item>
              <Timeline.Badge className="bg-purple text-white">
                <Icon icon={shoppingCartOutlined} />
              </Timeline.Badge>
              <Timeline.Body>
                <Link to="/dxretail" fontWeight="bold" className="text-light">
                  DX Retail Web Apps
                </Link>
              </Timeline.Body>
            </Timeline.Item>
            <Timeline.Item>
              <Timeline.Badge className="bg-purple text-white">
                <Icon icon={shoppingCartOutlined} />
              </Timeline.Badge>
              <Timeline.Body>
                <Link to="/dexoshop" fontWeight="bold" className="text-light">
                  Dexopos Shop Web Apps
                </Link>
              </Timeline.Body>
            </Timeline.Item>
            <Timeline.Item>
              <Timeline.Badge className="bg-purple text-white">
                <Icon icon={shoppingCartOutlined} />
              </Timeline.Badge>
              <Timeline.Body>
                <Link to="/axcorapos" fontWeight="bold" className="text-light">
                  Axcorapos Web Apps
                </Link>
              </Timeline.Body>
            </Timeline.Item>
            <Timeline.Item>
              <Timeline.Badge className="bg-purple text-white">
                <Icon icon={shoppingCartOutlined} />
              </Timeline.Badge>
              <Timeline.Body>
                <Link to="/boosterpos" fontWeight="bold" className="text-light">
                  Boosterpos Web Apps
                </Link>
              </Timeline.Body>
            </Timeline.Item>
            <Timeline.Item>
              <Timeline.Badge className="bg-purple text-white">
                <Icon icon={shoppingCartOutlined} />
              </Timeline.Badge>
              <Timeline.Body>
                <Link to="/larapos" fontWeight="bold" className="text-light">
                  Larapos Web Apps
                </Link>
              </Timeline.Body>
            </Timeline.Item>
          </Timeline>
        </div>
      </div>
      <div className="col-12 col-md-4 p-3 p-md-5">
        <div className=" p-3 p-md-5 shadow rounded">
          <h3>New Website</h3>
          <Timeline>
            <Timeline.Item>
              <Timeline.Badge className="bg-purple text-white">
                <Icon icon={websiteIcon} />
              </Timeline.Badge>
              <Timeline.Body>
                <Link to="/blogspot" fontWeight="bold" className="text-light">
                  Blogspot New Era
                </Link>
              </Timeline.Body>
            </Timeline.Item>
            <Timeline.Item>
              <Timeline.Badge className="bg-purple text-white">
                <Icon icon={websiteIcon} />
              </Timeline.Badge>
              <Timeline.Body>
                <Link to="/getaxcora" fontWeight="bold" className="text-light">
                  Get Axcora CMS
                </Link>
              </Timeline.Body>
            </Timeline.Item>
            <Timeline.Item>
              <Timeline.Badge className="bg-purple text-white">
                <Icon icon={websiteIcon} />
              </Timeline.Badge>
              <Timeline.Body>
                <Link to="/dynamic" fontWeight="bold" className="text-light">
                  Dynamic Website
                </Link>
              </Timeline.Body>
            </Timeline.Item>
            <Timeline.Item>
              <Timeline.Badge className="bg-purple text-white">
                <Icon icon={websiteIcon} />
              </Timeline.Badge>
              <Timeline.Body>
                <Link to="/static" fontWeight="bold" className="text-light">
                  Static Website
                </Link>
              </Timeline.Body>
            </Timeline.Item>
            <Timeline.Item>
              <Timeline.Badge className="bg-purple text-white">
                <Icon icon={websiteIcon} />
              </Timeline.Badge>
              <Timeline.Body>
                <Link to="/modern" fontWeight="bold" className="text-light">
                  Modern Website
                </Link>
              </Timeline.Body>
            </Timeline.Item>
            <Timeline.Item>
              <Timeline.Badge className="bg-purple text-white">
                <Icon icon={websiteIcon} />
              </Timeline.Badge>
              <Timeline.Body>
                <Link to="/premium" fontWeight="bold" className="text-light">
                  Premium Website Apps
                </Link>
              </Timeline.Body>
            </Timeline.Item>
          </Timeline>
        </div>
      </div>
    </div>
  </div>
);
export const Restox = () => (
  <div>
 <div className="row">
      <div className="col-12 col-md-6 p-3 p-md-5">
<img className="img-fluid rounded" alt="aplikasi kasir restoran rumah makan cafe mesin kasir online"
src="
https://1.bp.blogspot.com/-lnCfAUuYoPo/XzpXYT6SCCI/AAAAAAAALII/FXg4J7ar-askTsjcS5wHnnJQYr3wsH88ACLcBGAsYHQ/s550/aplikasi%2Brestoran%2Bonline%2Bweb%2Bapp.jpg
"/>
</div>
      <div className="col-12 col-md-6 p-3 p-md-5">
        <div className=" p-3 p-md-5 shadow rounded">
          <h3>Resto-X Restaurant Apps</h3>
<p>
fitur transaksi cepat, hold transaksi dengan pencatatan meja, list bill dengan alert hingga pembukuan detail mengenai keuangan dan laba rugi terangkum secara detail via aplikasi restoran online modern ini, memudahkan dalam digunakan dimana saja dan kapan saja secara real time online, dukungan multi device semakin nyaman untuk akses via android iphone hingga pc desktop laptop dan mesin kasir restoran anda dengan resto-x web app ini
</p>
<a
            className="btn btn-primary rounded-pill"
            href="https://mesinkasir.github.io/e-catalog/RESTO-X.pdf"
            target="_blank"
          >
            Download Now
          </a> <a
            className="btn btn-primary rounded-pill"
            href="https://www.youtube.com/watch?v=0CyXOmIAcJc&t=44s"
            target="_blank"
          >
            Test Demo
          </a>
</div></div></div>
  </div>
);
export const Dxresto = () => (
  <div>
 <div className="row">
      <div className="col-12 col-md-4 p-3 p-md-5">
<img className="img-fluid rounded" alt="aplikasi kasir restoran rumah makan cafe mesin kasir online"
src="
https://1.bp.blogspot.com/-VEXcMowqnJY/XzpXZ30jCEI/AAAAAAAALIk/Oz9CkmGQQtMeyyDTpIOJIwVTxF_q-_BCACLcBGAsYHQ/s256/new%2Bresto%2Bpos%2Bapp%2B-%2BCopy.png
"/>
</div>
      <div className="col-12 col-md-8 p-3 p-md-5">
        <div className=" p-3 p-md-5 shadow rounded">
          <h3>DX-Resto Restaurant Apps</h3>
<p>
Modern applikasi develope dengan menggunakan laravel php artisan include dengan vue js semakin menyempurnakan dalam bekerja, dengan modern UI desain dark mode semakin menarik untuk digunakan dalam bertransaksi , dukungan pencatatan meja dan mobile waiters memudahkan segala urusan dengan menggunakan nya, dexopos resto apps adalah solusi modern resto dengan compleks system dalam menunjang kebutuhan usaha kuliner rumah makan cafe warung , dengan fitur penjualan bergambar semakin menarik menggunakan dexopos resto dalam bekerja.
</p>
<a
            className="btn btn-primary rounded-pill"
            href="https://mesinkasir.github.io/e-catalog/dexoposrestoapps.pdf"
            target="_blank"
          >
            Download Now
          </a> <a
            className="btn btn-primary rounded-pill"
            href="https://www.youtube.com/watch?v=N2HsAaB-nJU"
            target="_blank"
          >
            Test Demo
          </a>
</div></div></div>
  </div>
);
export const Boostresto = () => (
  <div>
 <div className="row">
      <div className="col-12 col-md-6 p-3 p-md-5">
<img className="img-fluid rounded" alt="aplikasi kasir restoran rumah makan cafe mesin kasir online"
src="
https://1.bp.blogspot.com/-0UIxFFYSJhQ/XzpYa98F6CI/AAAAAAAALJA/iga-EPZTnU0L5a1C62U3MnH4Xcq8aPj4wCLcBGAsYHQ/s1366/mesin%2Bsoftware%2Bkasir%2Brestoran%2Bcafe%2Bonline1.jpg
"/>
</div>
      <div className="col-12 col-md-6 p-3 p-md-5">
        <div className=" p-3 p-md-5 shadow rounded">
          <h3>Boosterpos resto Restaurant Apps</h3>
<p>
fitur lengkap untuk pencatatan meja, bill pelanggan , melakukan pembayaran bill dan transaksi kasir, penjualan dengan pencatatan jenis transaksi cash payment hingga online system dan berbagai kebutuhan kebutuhan lain , include laporan penjualan untuk cek omset memudahkan dalam monitoring kinerja usaha kuliner anda, saat nya menggunakan boosterpos resto apps
</p>
<a
            className="btn btn-primary rounded-pill"
            href="https://mesinkasir.github.io/e-catalog/Boosterpos%20Resto%20App.pdf"
            target="_blank"
          >
            Download Now
          </a> <a
            className="btn btn-primary rounded-pill"
            href="https://www.youtube.com/watch?v=0EdgygTprSA"
            target="_blank"
          >
            Test Demo
          </a>
</div></div></div>
  </div>
);
export const Sipresto = () => (
  <div>
   <div className="row">
      <div className="col-12 col-md-5 p-3 p-md-5">
<img className="img-fluid rounded" alt="aplikasi kasir restoran rumah makan cafe mesin kasir online"
src="
https://1.bp.blogspot.com/-Fr0oYds1IF4/XzpXYw1qovI/AAAAAAAALIU/slCiVw8dGmgCxIVPkSZRCGNLdHavpGjhwCLcBGAsYHQ/s1349/apprestaurantonline-sipresto.png
"/>
</div>
      <div className="col-12 col-md-7 p-3 p-md-5">
        <div className=" p-3 p-md-5 shadow rounded">
          <h3>SIP Resto Restaurant Apps</h3>
<p>
Sip resto simple mudah digunakan dan support dengan penjualan menggunakan metode meja dalam operasional nya, semakin mudah dalam handling customer untuk kebutuhan waiters , dengan full web app online memudahkan waiters untuk bekerja menggunakan smartphone nya, dan selanjutnya kasir dapat dengan cepat melakukan transaksi via mesin kasir restoran berdasarkan pencatatan meja pelanggan , dengan system ini transaksi kasir restoran akan semakin cepat dan tentu laporan list penjualan memudahkan monitoring dalam cek penjualan restoran warung dan kuliner anda, include bonus website dan domain restoran cafe rumah makan warung anda semakin sempurna untuk full web app technology digunakan.
</p>
<a
            className="btn btn-primary rounded-pill"
            href="https://mesinkasir.github.io/e-catalog/Sip%20resto%20apps.pdf"
            target="_blank"
          >
            Download Now
          </a> <a
            className="btn btn-primary rounded-pill"
            href="https://www.youtube.com/watch?v=3vM0U8wLu3Y"
            target="_blank"
          >
            Test Demo
          </a>
</div></div></div>
  </div>
);
export const Funresto = () => (
  <div>
 <div className="row">
      <div className="col-12 col-md-7 p-3 p-md-5">
<img className="img-fluid rounded" alt="aplikasi kasir restoran rumah makan cafe mesin kasir online"
src="
https://1.bp.blogspot.com/-Uk7hiVOAaTc/XzpXaF1mKZI/AAAAAAAALIo/cuxgtykzO3Ahfmi22jL7mXgaa78qzpcTwCLcBGAsYHQ/s1000/restaurant%2Bapp%2Bcheap%2Bprice.jpg
"/>
</div>
      <div className="col-12 col-md-5 p-3 p-md-5">
        <div className=" p-3 p-md-5 shadow rounded">
          <h3>Funresto Restaurant Apps</h3>
<p>
 Fitur staff , account user , table untuk mendaftarkan meja , menu makanan dan minuman dengan 6 grup menu memudahkan untuk pengelompokan menu makanan dan minuman , POS penjualan kasir dengan display menu yang unik dan menarik , print struk kasir dan bill, system pembayaran , laporan list penjualan kasir.
</p>
<a
            className="btn btn-primary rounded-pill"
            href="https://mesinkasir.github.io/e-catalog/funrestoapp.pdf"
            target="_blank"
          >
            Download Now
          </a> <a
            className="btn btn-primary rounded-pill"
            href="https://youtu.be/hiVT-MZmUwk"
            target="_blank"
          >
            Test Demo
          </a>
</div></div></div>
  </div>
);
export const Zresto = () => (
  <div>
 <div className="row">
      <div className="col-12 col-md-8 p-3 p-md-5">
<img className="img-fluid rounded" alt="aplikasi kasir restoran rumah makan cafe mesin kasir online"
src="
https://1.bp.blogspot.com/-CkAJwZriihs/XzpXY0Vn8_I/AAAAAAAALIY/Nrg6sii3JuEDRswksDsORFrdCTI9cceTwCLcBGAsYHQ/s817/mesin%2Bkasir%2Brestoran%2Bonline%2Bz-resto%2Bweb%2Bapp.jpg
"/>
</div>
      <div className="col-12 col-md-4 p-3 p-md-5">
        <div className=" p-3 p-md-5 shadow rounded">
          <h3>Z-Resto Restaurant Apps</h3>
<p>
user database , menu makanan dan minuman dengan enam grup menu , pos penjualan kasir dengan menu makanan dan minuman bergambar, laporan detail list penjualan.
</p>
<a
            className="btn btn-primary rounded-pill"
            href="https://mesinkasir.github.io/e-catalog/Z-Resto.pdf"
            target="_blank"
          >
            Download Now
          </a> <a
            className="btn btn-primary rounded-pill"
            href="https://www.youtube.com/watch?v=CTiEkkZc6mU"
            target="_blank"
          >
            Test Demo
          </a>
</div></div></div>
  </div>
);
export const Posx = () => (
  <div>
 <div className="row">
      <div className="col-12 col-md-6 p-3 p-md-5">
<img className="img-fluid rounded" alt="aplikasi kasir toko mesin kasir online"
src="
https://1.bp.blogspot.com/-H42dYAX8K7o/XzpTSWl9kZI/AAAAAAAALG0/q201upeuQq00VNG_M2gDIRPVswz26Sg7wCLcBGAsYHQ/s910/aplikasi%2Btoko%2Bonline%2Bweb%2Bapp.jpg
"/>
</div>
      <div className="col-12 col-md-6 p-3 p-md-5">
        <div className=" p-3 p-md-5 shadow rounded">
          <h3>POS-X Web Apps</h3>
<p>
fitur lengkap user account, customer, supplier , member card, grup produk, produk based dengan gambar foto produk dan support dengan barcode system , service jasa , transaksi pembelian, in out kas ./ cash flow , penjualan kasir dengan mode touchscreen gambar dan support barcode dalam pos penjualan , pending transaksi kasir , laporan stok, laporan detail penjualan, laporan omset income dan berbagai laporan lain nya siap untuk diakses.
</p>
<a
            className="btn btn-primary rounded-pill"
            href="https://mesinkasir.github.io/e-catalog/POS-X%20web%20apps.pdf"
            target="_blank"
          >
            Download Now
          </a> <a
            className="btn btn-primary rounded-pill"
            href="https://www.youtube.com/watch?v=IuifeUDo3RU&t=35s"
            target="_blank"
          >
            Test Demo
          </a>
</div></div></div>
  </div>
);
export const Multipos = () => (
  <div>
 <div className="row">
      <div className="col-12 col-md-4 p-3 p-md-5">
<img className="img-fluid rounded" alt="aplikasi kasir toko mesin kasir online"
src="
https://1.bp.blogspot.com/-j8WmJM62M9Y/XzpTTUE9FlI/AAAAAAAALHI/gLAjPK6hArU1DANlSwcmrpODereITc73ACLcBGAsYHQ/s400/multicabang.png
"/>
</div>
      <div className="col-12 col-md-8 p-3 p-md-5">
        <div className=" p-3 p-md-5 shadow rounded">
          <h3>MultiPos Apps</h3>
<p>
fitur Admin office : mendaftarkan toko cabang dan user admin cabang guna login dan operasional menggunakan aplikasi cabang dalam kebutuhan nya, cek laporan laporan detail baik inventori stok management hingga income omset detail percabang cabang maupun secara keseluruhan global. Fitur toko cabang apps : register supplier, customer , melakukan inventori stok management, alert minimum stok produk , melakukan penjualan kasir dan support dengan barcode system, dan jika diijinkan admin cabang dapat cek laporan stok dan pendapatan income guna arsip sebagai laporan dalam kebutuhan nya. 
</p>
<a
            className="btn btn-primary rounded-pill"
            href="https://mesinkasir.github.io/e-catalog/MULTIPOS%20OUTLET.pdf"
            target="_blank"
          >
            Download Now
          </a> <a
            className="btn btn-primary rounded-pill"
            href="https://www.youtube.com/watch?v=mFSFJ4BgHiY"
            target="_blank"
          >
            Test Demo
          </a>
</div></div></div>
  </div>
);
export const Lava = () => (
  <div>
   <div className="row">
      <div className="col-12 col-md-6 p-3 p-md-5">
<img className="img-fluid rounded" alt="aplikasi kasir toko mesin kasir online"
src="
https://1.bp.blogspot.com/-kG2JnPxeWuY/X0ZarR4Ja2I/AAAAAAAALVQ/v_rPlhPkVuQxcG5kBIPx6Ge7fd1VQHW-QCLcBGAsYHQ/s1400/aplikasi%2Bkasir%2Btoko%2Bpenjualan%2Bretail%2Bgorsir%2Bplus%2Bwebsite%2B%25281%2529.jpg
"/>
</div>
      <div className="col-12 col-md-6 p-3 p-md-5">
        <div className=" p-3 p-md-5 shadow rounded">
          <h3>Lava Apps</h3>
<p>
 fitur, transaksi penjualan kasir dengan fitur harga retail dan grosir pada satu display pos kasir penjualan, retur pembelian , laporan laporan detail, stok produk , harga produk beli ,harga jual produk retail grosir, penerimaan barang dengan status nya, laporan pesanan pembelian , laporan pendapatan hari ini , laporan pendapatan per periode, dan lain lain.
</p>
<a
            className="btn btn-primary rounded-pill"
            href="https://mesinkasir.github.io/e-catalog/lavaapp.pdf"
            target="_blank"
          >
            Download Now
          </a> <a
            className="btn btn-primary rounded-pill"
            href="https://www.youtube.com/playlist?list=PLQDm6k9_HvYNKAtii4V59F27419PTpTbd"
            target="_blank"
          >
            Test Demo
          </a>
</div></div></div>
  </div>
);
export const Dxretail = () => (
  <div>
  <div className="row">
      <div className="col-12 col-md-6 p-3 p-md-5">
<img className="img-fluid rounded" alt="aplikasi kasir toko mesin kasir online"
src="
https://1.bp.blogspot.com/-PHloQ16bX7w/XzpTTIH13kI/AAAAAAAALHE/eRBYNXzb-IEliszosWJYGzR7ymOjJdeRQCLcBGAsYHQ/s510/dexoposretailapps.jpg
"/>
</div>
      <div className="col-12 col-md-6 p-3 p-md-5">
        <div className=" p-3 p-md-5 shadow rounded">
          <h3>DX-Retail Apps</h3>
<p>
fitur user account untuk regristasi divisi kasir, dan gudang admin database, supplier , product support dengan kode barcode , stok awal , pembelian , penjualan kasir point of sale support barcode system , stok opname out stok , laporan pembelian , laporan penjualan, laporan inventori stok history , laporan produk detail , out lose stok report, dan grafik grafik kinerja toko dan usaha.
</p>
<a
            className="btn btn-primary rounded-pill"
            href="https://mesinkasir.github.io/e-catalog/DX-Retail.pdf"
            target="_blank"
          >
            Download Now
          </a>
<a
            className="btn btn-primary rounded-pill"
            href="https://www.youtube.com/watch?v=JGTQ1dxnJEo&t=5s"
            target="_blank"
          >
            Test Demo
          </a>
</div></div></div>
  </div>
);
export const Dexoshop = () => (
  <div>
   <div className="row">
      <div className="col-12 col-md-7 p-3 p-md-5">
<img className="img-fluid rounded" alt="aplikasi kasir toko mesin kasir online"
src="
https://1.bp.blogspot.com/--t9O8VxLs5M/XzpTRj6GEEI/AAAAAAAALGk/PEqajmFQqQ4B8y7oZXrl22ZWdCSXqLoEACLcBGAsYHQ/s675/aplikasi%2Bkasir%2Btoko%2Bpenjualan%2Bonline%2Bterbaru%2Bkeren%2Bwp.jpg
"/>
</div>
      <div className="col-12 col-md-5 p-3 p-md-5">
        <div className=" p-3 p-md-5 shadow rounded">
          <h3>Dexopos Shop Apps</h3>
<p>
fitur terbaik dengan user account , staff petugas kasir pramuniaga , kategori grup produk , produk dengan fitur upload gambar untuk display penjualan kasir, POS point of sale penjualan kasir dengan fitur gambar foto produk yang keren dan modern , pembayaran pelanggan dengan multi payment, dan print kasir pos penjualan, laporan penjualan income profit detail berdasarkan periode , harian , mingguan , bulanan dan customise
</p>
<a
            className="btn btn-primary rounded-pill"
            href="https://mesinkasir.github.io/e-catalog/dexopos%20shop.pdf"
            target="_blank"
          >
            Download Now
          </a>
<a
            className="btn btn-primary rounded-pill"
            href="https://youtu.be/RL5C5zPqCWU"
            target="_blank"
          >
            Test Demo
          </a>
</div></div></div>
  </div>
);
export const Axcorapos = () => (
  <div>
 <div className="row">
      <div className="col-12 col-md-5 p-3 p-md-5">
<img className="img-fluid rounded" alt="aplikasi kasir toko mesin kasir online"
src="
https://1.bp.blogspot.com/-WedF6l3lT0c/XzpTRxxrJPI/AAAAAAAALGo/exC2ZmmJ9qw_FltyhpRRnTv2uAa1PcGyQCLcBGAsYHQ/s400/aplikasi%2Bkasir%2Btoko%2Bonline.png
"/>
</div>
      <div className="col-12 col-md-7 p-3 p-md-5">
        <div className=" p-3 p-md-5 shadow rounded">
          <h3>Axcorapos Apps</h3>
<p>
fitur : supplier , produk dengan barcode dan dukungan expired date fitur, pembelian ke supplier include expire date produk , penjualan kasir point of sale, cetak struk kasir penjualan , hapus data , laporan stok detail, jumlah stok , stok expired , modal awal , target profit , out produk , price list , laporan keuangan , income profit pendapatan detail laba rugi , laporan penjualan , laporan pembelian, target actual profit report , profit report detail , backoffice dashboard admin dengan kalkulator,agenda dan lain nya.
</p>
<a
            className="btn btn-primary rounded-pill"
            href="https://mesinkasir.github.io/e-catalog/AXCORAPOS.pdf"
            target="_blank"
          >
            Download Now
          </a> <a
            className="btn btn-primary rounded-pill"
            href="https://www.youtube.com/playlist?list=PLQDm6k9_HvYNprzMbZ2nCPMNw2L4iZXiu"
            target="_blank"
          >
            Test Demo
          </a>
</div></div></div>
  </div>
);
export const Boosterpos = () => <div>
 <div className="row">
      <div className="col-12 col-md-4 p-3 p-md-5">
<img className="img-fluid rounded" alt="aplikasi kasir toko mesin kasir online"
src="
https://1.bp.blogspot.com/-76lk4OREPt8/XzpTSqhsnuI/AAAAAAAALG4/S61TLej2iksgyw27nl7ULO-bBp9H3qJKgCLcBGAsYHQ/s400/aplikasi%2Btoko%2Bonline.png
"/>
</div>
      <div className="col-12 col-md-8 p-3 p-md-5">
        <div className=" p-3 p-md-5 shadow rounded">
          <h3>Boosterpos Apps</h3>
<p>
fitur master data produk dengan grup produk, kategori produk, produk jual, stok inventori management system, pos point of sale penjualan kasir , pembayaran transaksi kasir dengan pilihan cash, online payment dan lain nya, hingga kebutuhan status pembayaran via cash lunas, credit cicilan ataupun termint system, cek stok dan pricelist produk, cek transaksi detail laporan, cek laporan pembayaran cash , credit dan cicilan hingga sisa credit , termint tempo ,cek profit income detail berdasarkan periode sesuai kebutuhan harian,mingguan,bulanan dan customise, list detail penjualan kasir, setting konfigurasi web app, dan manual tutorial web app .
</p>
<a
            className="btn btn-primary rounded-pill"
            href="https://mesinkasir.github.io/e-catalog/Boosterpos%20Retail%20Shop.pdf"
            target="_blank"
          >
            Download Now
          </a> <a
            className="btn btn-primary rounded-pill"
            href="https://www.youtube.com/watch?v=8r7og7aFuWA"
            target="_blank"
          >
            Test Demo
          </a>
</div></div></div>
</div>
;
export const Larapos = () => <div>
 <div className="row">
      <div className="col-12 col-md-6 p-3 p-md-5">
<img className="img-fluid rounded" alt="aplikasi kasir toko mesin kasir online"
src="
https://1.bp.blogspot.com/-SAlwY3BG5L4/XzpRrkzuQXI/AAAAAAAALGc/wEDCCtG_6KskDbxH4qvQpeeXlVoNPoduQCLcBGAsYHQ/s600/aplikasi%2Btoko%2Bmesin%2Bkasir%2Bonline%2Blaravel%2Bpoint%2Bof%2Bsale%2Bcashier%2Bapps%2B%25283%2529.jpg
"/>
</div>
      <div className="col-12 col-md-6 p-3 p-md-5">
        <div className=" p-3 p-md-5 shadow rounded">
          <h3>Larapos Apps</h3>
<p>
Fitur : user account , unit satuan produk , product data dengan harga khusus retail dan grosir, point of sale penjualan kasir dengan fitur penjualan via panel grosir atau retail sesuai kebutuhan bertransaksi , price list prouct report untuk cek harga grosir maupun eceran , list penjualan kasir , profit income report berdasarkan periode sesuai kebutuhan anda, backup restore database , cek status history login web app,log out.
</p>
<a
            className="btn btn-primary rounded-pill"
            href="https://mesinkasir.github.io/e-catalog/larapos.pdf"
            target="_blank"
          >
            Download Now
          </a> <a
            className="btn btn-primary rounded-pill"
            href="https://www.youtube.com/watch?v=hlGd7yk4nko"
            target="_blank"
          >
            Test Demo
          </a>
</div></div></div>
</div>;
export const Blogspot = () => (
  <div>
    <div className="row">
      <div className="col-12 col-md-12 p-3 p-md-5">
        <div className=" p-3 p-md-5 shadow rounded">
          <h3>Blogspot new era</h3>
          <p>
            Apakah kamu masih menggunakan platform ini ??? tentunya masih ada
            dong, indonesia merupakan pengguna terbanyak pada platform ini, dan
            jangan remehkan blogspot, dengan hadirnya themes template file yang
            bisa di custom akan secara 100% dapat merubah tampilan display dari
            blogspot itu, bahkan kami pernah mendevelope dengan menggunakan
            blogspot untuk single page application, kesempurnaan dengan banyak
            nya technology menjadikan kemudahan untuk berkolaborasi dengan new
            blogspot era .
          </p>
          <p>
            By default blogspot blogger memiliki fitur SEO yang cukup bagus
            untuk digunakan oleh para blogger, jadi tidak perlu pindah dan
            upgrade ke cms lain , karena dengan custom design dan codding akan
            merubah secara drastis sebuah halaman blog menjadi profesional
            website dengan dukungan technology modern . saat nya update blogspot
            mu dengan layanan desain kami.
          </p>
          <a
            className="btn btn-primary rounded-pill"
            href="https://mesinkasir.github.io/e-catalog/websiteprice.pdf"
            target="_blank"
          >
            Download Now
          </a>
        </div>
      </div>
    </div>
  </div>
);
export const Getaxcora = () => (
  <div>
    <div className="row">
      <div className="col-12 col-md-12 p-3 p-md-5">
        <div className=" p-3 p-md-5 shadow rounded">
          <h3>Get Axcora new modern cms with SEO</h3>
          <p>
            Get axcora cms adalah sebuah content management system terbaru
            dengan mengusung flatfile , semakin cepat dalam penggunaan nya , dan
            ini adalah project open source yang kami kembangkan guna membantu
            pengguna dalam membuat website dengan cepat, dan mudah. Dengan tanpa
            database dan convert ke xmp file menjadikan kesempurnaan dalam
            berbagai kebutuhan baik kecepatan, ringan nya cms ini untuk
            digunakan dan berbagai kelebihan lain nya, saat nya beralih ke get
            axcora cms untuk masa depan yang terbaik, dan tentu layanan ini
            dengan harga murah untuk kebutuhan pembuatan website dengan
            menggunakan get axcora cms.
          </p>
          <p>
            Sempurnakan faktor SEO dengan kebutuhan terbaik dalam bekerja,
            bagaimana aplikasi pembuatan website ini akan secara otomatis
            menggenerate title, deskripsi , twitter dan facebook card secara
            otomatis sehingga memudahkan anda untuk fokus pada konten update,
            dan tentunya dukungan sitemap xml yang secara otomatis hadir
            menyempurnakan kebutuhan ini. saat nya menggunakan get axcora cms
            untuk website modern non database dan super SEO.
          </p>
          <a
            className="btn btn-primary rounded-pill"
            href="https://mesinkasir.github.io/e-catalog/websiteprice.pdf"
            target="_blank"
          >
            Download Now
          </a>
        </div>
      </div>
    </div>
  </div>
);
export const Dynamic = () => (
  <div>
    <div className="row">
      <div className="col-12 col-md-12 p-3 p-md-5">
        <div className=" p-3 p-md-5 shadow rounded">
          <h3>Dynamic website</h3>
          <p>
            Special untuk kebutuhan dynamic website tersedia berbagai pilihan
            dalam develope website sesuai dengan kebutuhan anda, dengan web
            admin yang memungkinkan anda dan karyawan untuk melakukan update
            mandiri dengan membuat artikel kontent maupun upload media semakin
            menyempurnakan dalam kebutuhan untuk pembuatan website mandiri dalam
            kebutuhan nya.
          </p>
          <p>
            Berbagai pilihan siap untuk digunakan dalam deploy situs mulai dari
            wordpress dengan kemudahan dan dukungan plugin nya, drupal dengan
            tingkat security nya, dan MODX adalah favorit kami untuk develope
            situs modern dengan MODX semakin menyempurnakan dalam bekerja,dan
            merupakan content management framework, tak lupa hadir symfony dan
            <a href="https://laravel.com" target="_blank">
              laravel
            </a>{" "}
            php artisan yang siap digunakan dalam develope modern website
            dynamic mu,kami juga menyediakan aplikasi cms open source kami dari
            laravel dan symfony ini untuk digunakan guna mempermudah dalam
            kebutuhan web admin update website.
          </p>
          <a
            className="btn btn-primary rounded-pill"
            href="https://mesinkasir.github.io/e-catalog/websiteprice.pdf"
            target="_blank"
          >
            Download Now
          </a>
        </div>
      </div>
    </div>
  </div>
);
export const Static = () => (
  <div>
    <div className="row">
      <div className="col-12 col-md-12 p-3 p-md-5">
        <div className=" p-3 p-md-5 shadow rounded">
          <h3>Static Website</h3>
          <p>
            Mudahkan segala nya dengan static site, karena setiap website akan
            direndering ke html page kenapa tidak menggunakan static site full
            codding dengan html css dan js untuk kebutuhan terbaik dalam
            develope modern situs mu.
          </p>
          <p>
            Dengan static site akan semakin aman dari tingkat security yang
            tinggi dan tentunya lebih bebas dalam bmenggunakan dengan berbagai
            tema tampilan pada setiap halaman nya, akan membebaskan segala
            ekspresi untuk membuat website sesuai kebutuhan dan keinginan.
            dukungan
            <a href="https://getbootstrap.com" target="_blank">
              bootstrap
            </a>
            dan berbagai framework lain akan menyempurnakan dalam project
            website static .
          </p>
          <p>
            Dan tentunya selain native html bootstrap juga tersedia pilihan
            dengan menggunakan
            <a href="https://jekyllrb.com" target="_blank">
              jekyll
            </a>
            ruby on rails, sebuah pelopor era static site modern dan persembahan
            dari github ini semakin menyempurnakan develope website dengan
            kecepatan yang fantastis dan kebebasan dengan menggunakan nya. saat
            nya menggunakan jekyll untuk kebutuhan situs static yang terbaik.
          </p>
          <a
            className="btn btn-primary rounded-pill"
            href="https://mesinkasir.github.io/e-catalog/websiteprice.pdf"
            target="_blank"
          >
            Download Now
          </a>
        </div>
      </div>
    </div>
  </div>
);
export const Modern = () => (
  <div>
    <div className="row">
      <div className="col-12 col-md-12 p-3 p-md-5">
        <div className=" p-3 p-md-5 shadow rounded">
          <h3>Modern website apps</h3>
          <p>
            Solusi terbaik bagi yang membutuhkan layanan pembuatan website
            dengan technology modern dalam develope nya, semakin elegan mewah
            dan keren dengan menggunakan technology baru ini untuk pembangunan
            dan pembuatan website .
          </p>
          <p>
            Develope menggunakan framework populer dengan mengusung single page
            application atau biasa disebut dengan progresive web apps
            menyempurnakan dalam develope nya, dengan angular, ionic, react
            maupun gatsby menyempunakan dalam kebutuhan web modern anda, rasakan
            kecepatan dengan menggunakan technology ini, akses setiap halaman
            non load semakin nyaman bagi pengunjung site anda .
          </p>
          <p>
            Kini saat nya update dan upgrade website mu dengan technology
            modern.
          </p>
          <a
            className="btn btn-primary rounded-pill"
            href="https://mesinkasir.github.io/e-catalog/websiteprice.pdf"
            target="_blank"
          >
            Download Now
          </a>
        </div>
      </div>
    </div>
  </div>
);
export const Premium = () => (
  <div>
    <div className="row">
      <div className="col-12 col-md-12 p-3 p-md-5">
        <div className=" p-3 p-md-5 shadow rounded">
          <h3>
            <a href="/">Premium website App</a>
          </h3>
          <p>
            Layanan jasa pembuatan website dengan premium service, dimana kami
            akan menghandle secara penuh untuk pembangunan project website untuk
            kebutuhan anda, mulai dari penataan skema konsep secara desain dan
            fungsional , hingga melibatkan banyak technology dalam penggunaan
            nya, dengan multiple dan kolaborasi technology harapan kami sebagai
            team dev agar website anda memiliki sebuah system yang berjalan
            berdasarkan skema dan kebutuhan nya, dan tentunya kami memberikan
            dua domain yang terintegrasi , halaman utama develope dengan
            menggunakan modern technology site seperti angular atau{" "}
            <a href="https://reactjs.org" target="_blank">
              react
            </a>{" "}
            hingga gatsby js, dan selanjutnya terintegrasi dengan halaman
            dynamis untuk memudahkan membagi divisi karyawan dan staff anda
            dalam melakukan update via content management system , dan tentunya
            untuk menunjang pembukuan usaha tersedia aplikasi online yang dapat
            digunakan dalam kebutuhan transaksi dan cek laporan secara detail
            hingga kebutuhan akuntansi , paket premium web app ini akan benar
            benar membuat usaha powerfull pada online mode.
          </p>
          <a
            className="btn btn-primary rounded-pill"
            href="https://mesinkasir.github.io/e-catalog/websiteprice.pdf"
            target="_blank"
          >
            Download Now
          </a>
        </div>
      </div>
    </div>
  </div>
);
