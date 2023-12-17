import ProductTile from '../catalog/ProductTile';
import ProductTileBest from '../catalog/ProductTileBest';
import HomeMark from './HomeMark';
import ProductTileMen from '../catalog/ProductTileMen';
import ProductTileWomen from '../catalog/ProductTileWomen';

export default function CatalogPreviews() {
  return (
    <>
      <section className="catalog-preview container">
        <header className="catalog-descpription text-center">
          <h1>Spring Collection</h1>
        </header>

        {/* bootstrap */}
        <div className="product-tiles row">
          <div className="col-6 col-lg-3 ">
            <ProductTile></ProductTile>
          </div>

          <div className="col-6 col-lg-3">
            <ProductTileBest></ProductTileBest>
          </div>

          <div className="d-none d-lg-block col-lg-3">
            <ProductTileMen></ProductTileMen>
          </div>

          <div className="d-none d-lg-block col-lg-3">
            <ProductTileWomen></ProductTileWomen>
          </div>
        </div>
      </section>

      <section className="catalog-preview container flex-layout">
        <header className="catalog-descpription text-center">
          <h1>Best reviewed</h1>
        </header>

        <div className="product-tiles">
          <div className="product-tile">
            <ProductTile></ProductTile>
          </div>

          <div className="product-tile">
            <ProductTileBest></ProductTileBest>
          </div>

          <div className="product-tile d-none d-lg-block">
            <ProductTileMen></ProductTileMen>
          </div>

          <div className="product-tile d-none d-lg-block">
            <ProductTileWomen></ProductTileWomen>
          </div>
        </div>
      </section>

      <section className="home-copy">
        <HomeMark></HomeMark>
      </section>

      <section className="catalog-preview container flex-layout">
        <header className="catalog-descpription text-center">
          <h1>Men s</h1>
        </header>

        <div className="product-tiles">
          <div className="product-tile">
            <ProductTile></ProductTile>
          </div>

          <div className="product-tile">
            <ProductTileBest></ProductTileBest>
          </div>

          <div className="product-tile d-none d-lg-block">
            <ProductTileMen></ProductTileMen>
          </div>

          <div className="product-tile d-none d-lg-block">
            <ProductTileWomen></ProductTileWomen>
          </div>
        </div>

        <footer className="catalog-footer d-none d-lg-flex">
          <button className="button-main">view all</button>
        </footer>
      </section>

      <section className="catalog-preview container flex-layout">
        <header className="catalog-descpription text-center">
          <h1>Women s</h1>
        </header>

        <div className="product-tiles">
          <div className="product-tile">
            <ProductTile></ProductTile>
          </div>

          <div className="product-tile">
            <ProductTileBest></ProductTileBest>
          </div>

          <div className="product-tile d-none d-lg-block">
            <ProductTileMen></ProductTileMen>
          </div>

          <div className="product-tile d-none d-lg-block">
            <ProductTileWomen></ProductTileWomen>
          </div>
        </div>

        <footer className="catalog-footer">
          <button className="button-main">view all</button>
        </footer>
      </section>
    </>
  );
}
