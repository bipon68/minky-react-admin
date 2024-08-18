import React from "react";
import { Link } from "react-router-dom";

const TailwindEleTypo = () => {
  return (
    <div>
      <div className="tile mb-4 mx-6 ">
        <div className="page-header border-b">
          <h2
            className="mb-3 text-4xl font-semibold line-head "
            id="typography"
          >
            Typography
          </h2>
        </div>

        <div className=" flex ">
          <div className="col-lg-4 w-full">
            <div className="bs-component grid gap-2">
              <h1 className="text-5xl">Heading 1</h1>
              <h2 className="text-4xl">Heading 2</h2>
              <h3 className="text-3xl">Heading 3</h3>
              <h4 className="text-2xl">Heading 4</h4>
              <h5 className="text-xl">Heading 5</h5>
              <h6 className="text-sm">Heading 6</h6>
              <h3 className="text-2xl">
                Heading
                <small className="text-muted text-2xl font-semibold">
                  with muted text
                </small>
              </h3>
              <p className="lead">
                Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
                auctor.
              </p>
            </div>
          </div>
          <div className="col-lg-4 w-full">
            <div className="bs-component grid gap-2">
              <h2 className="text-3xl font-semibold">Example body text</h2>
              <p>
                Nullam quis risus eget
                <Link href="#">urna mollis ornare</Link> vel eu leo. Cum sociis
                natoque penatibus et magnis dis parturient montes, nascetur
                ridiculus mus. Nullam id dolor id nibh ultricies vehicula.
              </p>
              <p>
                <small>
                  This line of text is meant to be treated as fine print.
                </small>
              </p>
              <p>
                The following is <strong>rendered as bold text</strong>.
              </p>
              <p>
                The following is
                <em className="font-semibold">rendered as italicized text</em>.
              </p>
              <p>
                An abbreviation of the word attribute is
                <abbr title="attribute">attr</abbr>.
              </p>
            </div>
          </div>
          <div className="col-lg-4 w-full">
            <div className="bs-component grid gap-2">
              <h2 className="text-3xl font-semibold">Emphasis classes</h2>
              <p className="text-muted">
                Fusce dapibus, tellus ac cursus commodo, tortor mauris nibh.
              </p>
              <p className="text-primary">
                Nullam id dolor id nibh ultricies vehicula ut id elit.
              </p>
              <p className="text-warning">
                Etiam porta sem malesuada magna mollis euismod.
              </p>
              <p className="text-danger">
                Donec ullamcorper nulla non metus auctor fringilla.
              </p>
              <p className="text-success">
                Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
              </p>
              <p className="text-info">
                Maecenas sed diam eget risus varius blandit sit amet non magna.
              </p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12">
            <h2
              className="mb-3 line-head text-3xl font-semibold"
              id="type-blockquotes"
            >
              Blockquotes
            </h2>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <div className="bs-component">
              <blockquote className="blockquote">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer posuere erat a ante.
                </p>
                <footer className="blockquote-footer">
                  Someone famous in
                  <cite title="Source Title">Source Title</cite>
                </footer>
              </blockquote>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="bs-component">
              <blockquote className="blockquote blockquote-reverse">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer posuere erat a ante.
                </p>
                <footer className="blockquote-footer">
                  Someone famous in
                  <cite title="Source Title">Source Title</cite>
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TailwindEleTypo;
