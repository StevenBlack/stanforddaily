import React from "react";
import { View } from "react-native";
import Wrapper from "components/Wrapper";
import ArchivePage, {
  ArchivePageType,
  ArchivePageProps,
  ArchivePageState,
} from "./ArchivePage";

export default class CategoryArchivePage extends React.Component<
  ArchivePageProps,
  ArchivePageState
> {
  static async getInitialProps(param): Promise<any> {
    return ArchivePage.getInitialProps(param);
  }

  render(): React.ReactNode {
    return <ArchivePage type={ArchivePageType.Category} {...this.props} />;
  }
}

export function CategoryArchivePageWrapper(props: any): any {
  return (
    <Wrapper class={CategoryArchivePage} props={props} getInitialProps={{}} />
  );
}