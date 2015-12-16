describe('ForgotPass Component', ()=> {
  it('shoulld h1 tag with Reset Password', ()=> {
    let component = React.addons.TestUtils.renderIntoDocument(
      <ForgotPass />
    );

    let h1 = React.addons.TestUtils.findRenderedDOMComponentWithTag(
       component, 'h1'
    );
    expect(h1.getDOMNode().textContent).toBe(true);
    expect(h1.getDOMNode().textContent).toEqual('Reset Password');
  });
});
