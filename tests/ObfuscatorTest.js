import { Selector } from 'testcafe'; // first import testcafe selectors
import { ReactSelector } from 'testcafe-react-selectors';

fixture `Getting Started`// declare the fixture
  .page `http://localhost:3000`;  // specify the start page


//then create a test and place your code there
test('My first test', async t => {

  const inputText = ReactSelector('input').withProps(
    {automationid: 'text'}
  );

  const obfBtn = ReactSelector('button').withProps(
    {automationid: 'obf-btn'}
  );

  const obfText = ReactSelector('input').withProps(
    {automationid: 'obf-text'}
  );

  await t
    .typeText(inputText, 'fthfhfgh')
    .click(obfBtn)

    // Use the assertion to check if the actual header text is equal to the expected one
    .expect(obfText.value).eql('LZNLNLMN');
});
