"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[5739],{4137:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return m}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(a),m=r,k=d["".concat(l,".").concat(m)]||d[m]||c[m]||i;return a?n.createElement(k,o(o({ref:t},u),{},{components:a})):n.createElement(k,o({ref:t},u))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},3426:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return u},default:function(){return d}});var n=a(7462),r=a(3366),i=(a(7294),a(4137)),o=["components"],s={title:"Spark lineage emitter",sidebar_label:"Spark lineage emitter",slug:"/spark-lineage",custom_edit_url:"https://github.com/linkedin/datahub/blob/master/spark-lineage/README.md"},l="Spark lineage emitter",p={unversionedId:"spark-lineage/README",id:"spark-lineage/README",isDocsHomePage:!1,title:"Spark lineage emitter",description:'The Spark lineage emitter is a java library that provides a Spark listener implementation "DatahubLineageEmitter". The DatahubLineageEmitter listens to events such application start/end, and SQLExecution start/end to create pipelines (i.e. DataJob) and tasks (i.e. DataFlow) in Datahub along with lineage.',source:"@site/genDocs/spark-lineage/README.md",sourceDirName:"spark-lineage",slug:"/spark-lineage",permalink:"/docs/spark-lineage",editUrl:"https://github.com/linkedin/datahub/blob/master/spark-lineage/README.md",tags:[],version:"current",frontMatter:{title:"Spark lineage emitter",sidebar_label:"Spark lineage emitter",slug:"/spark-lineage",custom_edit_url:"https://github.com/linkedin/datahub/blob/master/spark-lineage/README.md"},sidebar:"overviewSidebar",previous:{title:"Lineage sample code",permalink:"/docs/lineage/sample_code"},next:{title:"Adding a Metadata Ingestion Source",permalink:"/docs/metadata-ingestion/adding-source"}},u=[{value:"Configuring Spark emitter",id:"configuring-spark-emitter",children:[{value:"Config file for spark-submit",id:"config-file-for-spark-submit",children:[],level:3},{value:"Configuring with SparkSession Builder for notebooks",id:"configuring-with-sparksession-builder-for-notebooks",children:[],level:3}],level:2},{value:"Model mapping",id:"model-mapping",children:[{value:"Custom properties &amp; relating to Spark UI",id:"custom-properties--relating-to-spark-ui",children:[],level:3}],level:2},{value:"Release notes for v0.0.3",id:"release-notes-for-v003",children:[{value:"Spark versions supported",id:"spark-versions-supported",children:[],level:3},{value:"Environments tested with",id:"environments-tested-with",children:[],level:3},{value:"Spark commands supported",id:"spark-commands-supported",children:[],level:3},{value:"Spark commands not yet supported",id:"spark-commands-not-yet-supported",children:[],level:3},{value:"Important notes on usage",id:"important-notes-on-usage",children:[],level:3}],level:2},{value:"Known limitations",id:"known-limitations",children:[],level:2}],c={toc:u};function d(e){var t=e.components,a=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"spark-lineage-emitter"},"Spark lineage emitter"),(0,i.kt)("p",null,'The Spark lineage emitter is a java library that provides a Spark listener implementation "DatahubLineageEmitter". The DatahubLineageEmitter listens to events such application start/end, and SQLExecution start/end to create pipelines (i.e. DataJob) and tasks (i.e. DataFlow) in Datahub along with lineage.'),(0,i.kt)("h2",{id:"configuring-spark-emitter"},"Configuring Spark emitter"),(0,i.kt)("p",null,"Listener configuration can be done using a config file or while creating a spark Session."),(0,i.kt)("h3",{id:"config-file-for-spark-submit"},"Config file for spark-submit"),(0,i.kt)("p",null,"When running jobs using spark-submit, the listener is to be configured in the config file."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"spark.master                                 spark://spark-master:7077\n\n#Configuring datahub spark listener jar\nspark.jars.packages              io.acryl:datahub-spark-lineage:0.0.3\nspark.extraListeners                         com.linkedin.datahub.lineage.spark.interceptor.DatahubLineageEmitter\nspark.datahub.rest.server                    http://localhost:8080\n")),(0,i.kt)("h3",{id:"configuring-with-sparksession-builder-for-notebooks"},"Configuring with SparkSession Builder for notebooks"),(0,i.kt)("p",null,"When running interactive jobs from a notebook, the listener can be configured while building the Spark Session."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'spark = SparkSession.builder \\\n          .master("spark://spark-master:7077") \\\n          .appName("test-application") \\\n          .config("spark.jars.packages","io.acryl:datahub-spark-lineage:0.0.3") \\\n          .config("spark.extraListeners","com.linkedin.datahub.lineage.interceptor.spark.DatahubLineageEmitter") \\\n          .config("spark.datahub.rest.server", "http://localhost:8080") \\\n          .enableHiveSupport() \\\n          .getOrCreate()\n')),(0,i.kt)("h2",{id:"model-mapping"},"Model mapping"),(0,i.kt)("p",null,"A pipeline is created per Spark <master, appName>.\nA task is created per unique Spark query execution within an app."),(0,i.kt)("h3",{id:"custom-properties--relating-to-spark-ui"},"Custom properties & relating to Spark UI"),(0,i.kt)("p",null,"The following custom properties in pipelines and tasks relate to the Spark UI:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"appName and appId in a pipeline can be used to determine the Spark application"),(0,i.kt)("li",{parentName:"ul"},"description and SQLQueryId in a task can be used to determine the Query Execution within the application on the SQL tab of Spark UI")),(0,i.kt)("p",null,"Other custom properties of pipelines and tasks capture the start and end times of execution etc.\nThe query plan is captured in the ",(0,i.kt)("em",{parentName:"p"},"queryPlan")," property of a task."),(0,i.kt)("h2",{id:"release-notes-for-v003"},"Release notes for v0.0.3"),(0,i.kt)("p",null,"In this version, basic dataset-level lineage is captured using the model mapping as mentioned earlier."),(0,i.kt)("h3",{id:"spark-versions-supported"},"Spark versions supported"),(0,i.kt)("p",null,"The primary version tested is Spark/Scala version 2.4.8/2_11.\nWe anticipate this to work well with other Spark 2.4.x versions and Scala 2_11."),(0,i.kt)("p",null,"Support for other Spark versions is planned in the very near future."),(0,i.kt)("h3",{id:"environments-tested-with"},"Environments tested with"),(0,i.kt)("p",null,"This initial release has been tested with the following environments:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"spark-submit of Python/Java applications to local and remote servers"),(0,i.kt)("li",{parentName:"ul"},"notebooks")),(0,i.kt)("p",null,"Note that testing for other environments such as Databricks and standalone applications is planned in near future."),(0,i.kt)("h3",{id:"spark-commands-supported"},"Spark commands supported"),(0,i.kt)("p",null,"Below is a list of Spark commands that are parsed currently:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"InsertIntoHadoopFsRelationCommand"),(0,i.kt)("li",{parentName:"ul"},"SaveIntoDataSourceCommand (jdbc)"),(0,i.kt)("li",{parentName:"ul"},"CreateHiveTableAsSelectCommand"),(0,i.kt)("li",{parentName:"ul"},"InsertIntoHiveTable")),(0,i.kt)("p",null,"Effectively, these support data sources/sinks corresponding to Hive, HDFS and JDBC."),(0,i.kt)("h3",{id:"spark-commands-not-yet-supported"},"Spark commands not yet supported"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"View related commands"),(0,i.kt)("li",{parentName:"ul"},"Cache commands and implications on lineage"),(0,i.kt)("li",{parentName:"ul"},"RDD jobs")),(0,i.kt)("h3",{id:"important-notes-on-usage"},"Important notes on usage"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"It is advisable to ensure appName is used appropriately to ensure you can trace lineage from a pipeline back to your source code.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"If multiple apps with the same appName run concurrently, dataset-lineage will be captured correctly but the custom-properties e.g. app-id, SQLQueryId would be unreliable. We expect this to be quite rare.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"If spark execution fails, then an empty pipeline would still get created, but it may not have any tasks.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"For HDFS sources, the folder (name) is regarded as the dataset (name) to align with typical storage of parquet/csv formats."))),(0,i.kt)("h2",{id:"known-limitations"},"Known limitations"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Only postgres supported for JDBC sources in this initial release. Support for other driver URL formats will be added in future."),(0,i.kt)("li",{parentName:"ul"},"Behavior with cached datasets is not fully specified/defined in context of lineage."),(0,i.kt)("li",{parentName:"ul"},"There is a possibility that very short-lived jobs that run within a few milliseconds may not be captured by the listener. This should not cause an issue for realistic Spark applications.")))}d.isMDXComponent=!0}}]);