
// Do not modify
// Generated from "./scripts/update-site/build-pages"

import PrimitivePageMain from "~/components/Primitives/PrimitivePageMain";
import CopyPackages from "~/components/CopyPackage/CopyPackages";

/*@jsxRuntime automatic @jsxImportSource solid-js*/
import {useMDXComponents as _provideComponents} from "solid-mdx";
function _createMdxContent(props) {
  const _components = Object.assign({
    p: "p",
    a: "a",
    h2: "h2",
    pre: "pre",
    code: "code",
    span: "span"
  }, _provideComponents(), props.components);
  return <><_components.p>{"Creates a method for internationalization support. This primitive set is largely inspired by "}<_components.a href="https://github.com/developit/dlv/blob/master/index.js">{"dlv"}</_components.a>{" and passes all its tests."}</_components.p>{"\n"}<_components.h2 id="how-to-use-it"><_components.a className="header-anchor" href="#how-to-use-it">{"#"}</_components.a>{"How to use it"}</_components.h2>{"\n"}<_components.p>{"Install it:"}</_components.p>{"\n"}<_components.pre><_components.code className="hljs language-bash">{"yarn add @solid-primitives/i18n\n"}</_components.code></_components.pre>{"\n"}<_components.p>{"Use it:"}</_components.p>{"\n"}<_components.pre><_components.code className="hljs language-tsx"><_components.span className="hljs-keyword">{"import"}</_components.span>{" { render } "}<_components.span className="hljs-keyword">{"from"}</_components.span>{" "}<_components.span className="hljs-string">{"\"solid-js/web\""}</_components.span>{";\n"}<_components.span className="hljs-keyword">{"import"}</_components.span>{" { "}<_components.span className="hljs-title class_">{"Component"}</_components.span>{", createSignal } "}<_components.span className="hljs-keyword">{"from"}</_components.span>{" "}<_components.span className="hljs-string">{"\"solid-js\""}</_components.span>{";\n\n"}<_components.span className="hljs-keyword">{"import"}</_components.span>{" { I18nContext, createI18nContext, useI18n } "}<_components.span className="hljs-keyword">{"from"}</_components.span>{" "}<_components.span className="hljs-string">{"\"@solid-primitives/i18n\""}</_components.span>{";\n\n"}<_components.span className="hljs-keyword">{"const"}</_components.span>{" "}<_components.span className="hljs-title class_">{"App"}</_components.span>{": "}<_components.span className="hljs-title class_">{"Component"}</_components.span>{" = "}<_components.span className="hljs-function">{"() =>"}</_components.span>{" {\n  "}<_components.span className="hljs-keyword">{"const"}</_components.span>{" [t, { add, locale, dict }] = "}<_components.span className="hljs-title function_">{"useI18n"}</_components.span>{"();\n  "}<_components.span className="hljs-keyword">{"const"}</_components.span>{" [name, setName] = "}<_components.span className="hljs-title function_">{"createSignal"}</_components.span>{"("}<_components.span className="hljs-string">{"\"Greg\""}</_components.span>{");\n\n  "}<_components.span className="hljs-keyword">{"const"}</_components.span>{" "}<_components.span className="hljs-title function_">{"addLanguage"}</_components.span>{" = ("}<_components.span className="hljs-params" />{") => {\n    "}<_components.span className="hljs-title function_">{"add"}</_components.span>{"("}<_components.span className="hljs-string">{"\"sw\""}</_components.span>{", { "}<_components.span className="hljs-attr">{"hello"}</_components.span>{": "}<_components.span className="hljs-string">{"\"hej {{ name }}, hur mar du?\""}</_components.span>{" });\n    "}<_components.span className="hljs-title function_">{"locale"}</_components.span>{"("}<_components.span className="hljs-string">{"\"sw\""}</_components.span>{");\n  };\n\n  "}<_components.span className="hljs-keyword">{"return"}</_components.span>{" (\n    "}<_components.span className="xml"><_components.span className="hljs-tag">{"<>"}</_components.span>{"\n      "}<_components.span className="hljs-tag">{"<"}<_components.span className="hljs-name">{"button"}</_components.span>{" "}<_components.span className="hljs-attr">{"onClick"}</_components.span>{"="}<_components.span className="hljs-string">{"{()"}</_components.span>{" =>"}</_components.span>{" locale(\"fr\")}>fr"}<_components.span className="hljs-tag">{"</"}<_components.span className="hljs-name">{"button"}</_components.span>{">"}</_components.span>{"\n      "}<_components.span className="hljs-tag">{"<"}<_components.span className="hljs-name">{"button"}</_components.span>{" "}<_components.span className="hljs-attr">{"onClick"}</_components.span>{"="}<_components.span className="hljs-string">{"{()"}</_components.span>{" =>"}</_components.span>{" locale(\"en\")}>en"}<_components.span className="hljs-tag">{"</"}<_components.span className="hljs-name">{"button"}</_components.span>{">"}</_components.span>{"\n      "}<_components.span className="hljs-tag">{"<"}<_components.span className="hljs-name">{"button"}</_components.span>{" "}<_components.span className="hljs-attr">{"onClick"}</_components.span>{"="}<_components.span className="hljs-string">{"{()"}</_components.span>{" =>"}</_components.span>{" locale(\"unknownLanguage\")}>unknown language"}<_components.span className="hljs-tag">{"</"}<_components.span className="hljs-name">{"button"}</_components.span>{">"}</_components.span>{"\n      "}<_components.span className="hljs-tag">{"<"}<_components.span className="hljs-name">{"button"}</_components.span>{" "}<_components.span className="hljs-attr">{"onClick"}</_components.span>{"="}<_components.span className="hljs-string">{"{addLanguage}"}</_components.span>{">"}</_components.span>{"add and set swedish"}<_components.span className="hljs-tag">{"</"}<_components.span className="hljs-name">{"button"}</_components.span>{">"}</_components.span>{"\n      "}<_components.span className="hljs-tag">{"<"}<_components.span className="hljs-name">{"input"}</_components.span>{" "}<_components.span className="hljs-attr">{"value"}</_components.span>{"="}<_components.span className="hljs-string">{"{name()}"}</_components.span>{" "}<_components.span className="hljs-attr">{"onInput"}</_components.span>{"="}<_components.span className="hljs-string">{"{e"}</_components.span>{" =>"}</_components.span>{" setName(e.target.value)} />\n      "}<_components.span className="hljs-tag">{"<"}<_components.span className="hljs-name">{"hr"}</_components.span>{" />"}</_components.span>{"\n      "}<_components.span className="hljs-tag">{"<"}<_components.span className="hljs-name">{"h1"}</_components.span>{">"}</_components.span>{"{t(\"hello\", { name: name() }, \"Hello {{ name }}!\")}!"}<_components.span className="hljs-tag">{"</"}<_components.span className="hljs-name">{"h1"}</_components.span>{">"}</_components.span>{"\n      "}<_components.span className="hljs-tag">{"<"}<_components.span className="hljs-name">{"p"}</_components.span>{">"}</_components.span>{"{locale()}"}<_components.span className="hljs-tag">{"</"}<_components.span className="hljs-name">{"p"}</_components.span>{">"}</_components.span>{"\n      "}<_components.span className="hljs-tag">{"<"}<_components.span className="hljs-name">{"pre"}</_components.span>{">"}</_components.span>{"\n        "}<_components.span className="hljs-tag">{"<"}<_components.span className="hljs-name">{"code"}</_components.span>{">"}</_components.span>{"{JSON.stringify(dict(\"sw\"), null, 4)}"}<_components.span className="hljs-tag">{"</"}<_components.span className="hljs-name">{"code"}</_components.span>{">"}</_components.span>{"\n      "}<_components.span className="hljs-tag">{"</"}<_components.span className="hljs-name">{"pre"}</_components.span>{">"}</_components.span>{"\n    "}<_components.span className="hljs-tag">{"</>"}</_components.span></_components.span>{"\n  );\n};\n\n"}<_components.span className="hljs-keyword">{"const"}</_components.span>{" dict = {\n  "}<_components.span className="hljs-attr">{"fr"}</_components.span>{": {\n    "}<_components.span className="hljs-attr">{"hello"}</_components.span>{": "}<_components.span className="hljs-string">{"\"bonjour {{ name }}, comment vas-tu ?\""}</_components.span>{"\n  },\n  "}<_components.span className="hljs-attr">{"en"}</_components.span>{": {\n    "}<_components.span className="hljs-attr">{"hello"}</_components.span>{": "}<_components.span className="hljs-string">{"\"hello {{ name }}, how are you?\""}</_components.span>{"\n  }\n};\n"}<_components.span className="hljs-keyword">{"const"}</_components.span>{" value = "}<_components.span className="hljs-title function_">{"createI18nContext"}</_components.span>{"(dict, "}<_components.span className="hljs-string">{"\"fr\""}</_components.span>{");\n\n"}<_components.span className="hljs-title function_">{"render"}</_components.span>{"(\n  "}<_components.span className="hljs-function">{"() =>"}</_components.span>{" (\n    "}<_components.span className="xml"><_components.span className="hljs-tag">{"<"}<_components.span className="hljs-name">{"I18nContext.Provider"}</_components.span>{" "}<_components.span className="hljs-attr">{"value"}</_components.span>{"="}<_components.span className="hljs-string">{"{value}"}</_components.span>{">"}</_components.span>{"\n      "}<_components.span className="hljs-tag">{"<"}<_components.span className="hljs-name">{"App"}</_components.span>{" />"}</_components.span>{"\n    "}<_components.span className="hljs-tag">{"</"}<_components.span className="hljs-name">{"I18nContext.Provider"}</_components.span>{">"}</_components.span></_components.span>{"\n  ),\n  "}<_components.span className="hljs-variable language_">{"document"}</_components.span>{"."}<_components.span className="hljs-title function_">{"getElementById"}</_components.span>{"("}<_components.span className="hljs-string">{"\"app\""}</_components.span>{")\n);\n"}</_components.code></_components.pre>{"\n"}<_components.h2 id="demo"><_components.a className="header-anchor" href="#demo">{"#"}</_components.a>{"Demo"}</_components.h2>{"\n"}<_components.p><_components.a href="https://solidjs-community.github.io/solid-primitives/i18n/">{"Live Site"}</_components.a></_components.p>{"\n"}<_components.p>{"You may view a working example here: "}<_components.a href="https://codesandbox.io/s/use-i18n-rd7jq?file=/src/index.tsx">{"CodeSandbox"}</_components.a></_components.p>{"\n"}<_components.h2 id="changelog"><_components.a className="header-anchor" href="#changelog">{"#"}</_components.a>{"Changelog"}</_components.h2>{"\n"}<_components.p>{"See "}<_components.a href="./CHANGELOG.md">{"CHANGELOG.md"}</_components.a></_components.p></>;
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = Object.assign({}, _provideComponents(), props.components);
  return MDXLayout ? <MDXLayout {...props}><_createMdxContent {...props} /></MDXLayout> : _createMdxContent(props);
}



export default function Index () {
  return (
    <PrimitivePageMain packageName="@solid-primitives/i18n" name="i18n" stage={3}>
      <MDXContent/>
    </PrimitivePageMain>
  )
}
