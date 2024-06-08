export default function Blurb() {
  return (
    <div>
      <section className='headline-blurb'>
        <div className='container-fluid'>
          <div className='row'>
            <div className='headline-blurb__larger-image'>
              <img src='../../../horizontal.jpeg' alt='vertical Image' />
            </div>
            <div className='d-flex'>
              <img className='headline-blurb__smaller-image' src='../../../horizontal.jpeg' alt='vertical Image' />
            </div>
            <div className='headline-blurb__copy'>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ea earum alias eum nulla accusantium
                consequatur provident modi quisquam! Repellendus harum deserunt rem, reiciendis nisi temporibus est
                necessitatibus voluptatum eligendi!
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
