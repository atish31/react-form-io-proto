import { Container } from "react-bootstrap";
import { Form } from "@formio/react";
import { atomOneLight, CopyBlock } from "react-code-blocks";
import logo from "./Light-Background.png";

export  const Home = () => {

  //get this json from strapi
  const jsonSchema = {"_id":"65754efce19fe284bc82f978","title":"Test Form","name":"testForm","path":"testform","type":"form","display":"form","tags":[],"access":[{"type":"create_own","roles":[]},{"type":"create_all","roles":[]},{"type":"read_own","roles":[]},{"type":"read_all","roles":["65751c0de19fe284bc816977","65751c0de19fe284bc81697b","65751c0de19fe284bc81697f"]},{"type":"update_own","roles":[]},{"type":"update_all","roles":[]},{"type":"delete_own","roles":[]},{"type":"delete_all","roles":[]},{"type":"team_read","roles":[]},{"type":"team_write","roles":[]},{"type":"team_admin","roles":[]}],"submissionAccess":[{"type":"create_own","roles":["65751c0de19fe284bc81697f"]},{"type":"create_all","roles":["65751c0de19fe284bc81697f"]},{"type":"read_own","roles":[]},{"type":"read_all","roles":[]},{"type":"update_own","roles":[]},{"type":"update_all","roles":[]},{"type":"delete_own","roles":[]},{"type":"delete_all","roles":[]},{"type":"team_read","roles":[]},{"type":"team_write","roles":[]},{"type":"team_admin","roles":[]}],"owner":"65751ba2e19fe284bc8162f2","components":[{"label":"Personal Details","components":[{"label":"Personal Details","key":"personalDetails","components":[{"label":"First Name","applyMaskOn":"change","tableView":true,"key":"firstName","type":"textfield","input":true},{"label":"Last Name","applyMaskOn":"change","tableView":true,"key":"lastName","type":"textfield","input":true},{"label":"Age","applyMaskOn":"change","mask":false,"tableView":false,"delimiter":false,"requireDecimal":false,"inputFormat":"plain","truncateMultipleSpaces":false,"key":"age","type":"number","input":true},{"label":"Intrested","optionsLabelPosition":"right","inline":false,"tableView":false,"values":[{"label":"Yes","value":"Yes","shortcut":""},{"label":"No","value":"No","shortcut":""}],"key":"intrested","type":"radio","input":true}]}],"key":"person","type":"tabs","input":false,"tableView":false},{"label":"Building Details","components":[{"label":"Building Details","key":"buildingDetails","components":[{"label":"Address ID","applyMaskOn":"change","tableView":true,"key":"addressId","type":"textfield","input":true},{"label":"Areas Interested In","widget":"choicesjs","tableView":true,"data":{"values":[{"label":"Sedra","value":"sedra"},{"label":"Riyadh","value":"riyadh"}]},"key":"areasInterestedIn","type":"select","input":true},{"eventType":"formLoad","key":"recaptcha","type":"recaptcha","input":true,"tableView":false,"label":"reCAPTCHA"}]}],"key":"address","type":"tabs","input":false,"tableView":false},{"type":"button","label":"Submit","key":"submit","disableOnInvalid":true,"input":true,"tableView":false}],"settings":{"share":{"theme":"","showHeader":true},"allowExistsEndpoint":true,"recaptcha":{"isEnabled":true}},"properties":{},"project":"65751c0de19fe284bc816970","controller":"","revisions":"","submissionRevisions":"","_vid":0,"created":"2023-12-10T05:39:08.244Z","modified":"2023-12-11T06:12:22.914Z","machineName":"uymjceuaflzghit:testForm","fieldMatchAccess":{"read":[{"formFieldPath":"","value":"","operator":"$eq","valueType":"string","roles":[]}],"write":[{"formFieldPath":"","value":"","operator":"$eq","valueType":"string","roles":[]}],"create":[{"formFieldPath":"","value":"","operator":"$eq","valueType":"string","roles":[]}],"admin":[{"formFieldPath":"","value":"","operator":"$eq","valueType":"string","roles":[]}],"delete":[{"formFieldPath":"","value":"","operator":"$eq","valueType":"string","roles":[]}],"update":[{"formFieldPath":"","value":"","operator":"$eq","valueType":"string","roles":[]}],"_id":"65769dd6959eef0f39497f5e"},"plan":"trial"}

  const onSubmitHandler = (submission) => {
    console.log(submission, 'submission');
  };

  return (
    <>


      <Container className="pt-5">
        <div className="card p-3">
          <div className="card-body bg-light rounded-3">
          <Form
            form={jsonSchema}
            onSubmit={onSubmitHandler}
          />
          </div>
        </div>
      </Container>
    </>
  );
};

// export  Home;
