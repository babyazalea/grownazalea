import { MDXRemoteProps, MDXRemoteSerializeResult } from "next-mdx-remote";

export type MdxResource = {
  mdxSource: MDXRemoteSerializeResult<Record<string, unknown>>;
  id: string;
};

export type ProjectMdxResource = {
  id: string;
  mdxSource: MDXRemoteProps;
  title: string;
  date: string;
  skills: string;
  description: string;
  githubUrl1: string;
  githubUrl2?: string;
  serviceUrl: string;
  appStoreUrl?: string;
  isDeprecated: string;
  announcement?: string;
};
