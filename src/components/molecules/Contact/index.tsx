import type { ReactElement } from "react";
import type { ContactProps } from "./Contact.interface";
import ComponentBuilder from "../../../common/builders/ComponentBuilder";
import ContactView from "./Contact.view";

const Contact = (props: ContactProps): ReactElement => (
  <ComponentBuilder props={props} view={ContactView} />
);

export default Contact;
