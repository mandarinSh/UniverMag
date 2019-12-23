import { Selector } from 'testcafe'; // first import testcafe selectors
import { ReactSelector } from 'testcafe-react-selectors';

fixture `Deobfuscator test`// declare the fixture
  .page `http://localhost:3000`;  // specify the start page


//then create a test and place your code there
test('Positive Deobfuscator test', async t => {

  const inputText = ReactSelector('input').withProps(
    {automationid: 'text-for-deobf'}
  );

  const obfBtn = ReactSelector('button').withProps(
    {automationid: 'deobf-btn'}
  );

  const obfText = ReactSelector('input').withProps(
    {automationid: 'deobf-text'}
  );

  await t
    .typeText(inputText, 'LZNLNLMN')
    .click(obfBtn)

    // Use the assertion to check if the actual header text is equal to the expected one
    .expect(obfText.value).eql('fthfhfgh');
});
