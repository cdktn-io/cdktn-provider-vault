# `transformTransformationTokenizationStore` Submodule <a name="`transformTransformationTokenizationStore` Submodule" id="@cdktn/provider-vault.transformTransformationTokenizationStore"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### TransformTransformationTokenizationStore <a name="TransformTransformationTokenizationStore" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/transform_transformation_tokenization_store vault_transform_transformation_tokenization_store}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.Initializer"></a>

```java
import io.cdktn.providers.vault.transform_transformation_tokenization_store.TransformTransformationTokenizationStore;

TransformTransformationTokenizationStore.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .connectionString(java.lang.String)
    .driver(java.lang.String)
    .name(java.lang.String)
    .password(java.lang.String)
    .path(java.lang.String)
    .type(java.lang.String)
    .username(java.lang.String)
//  .id(java.lang.String)
//  .maxConnectionLifetime(java.lang.Number)
//  .maxIdleConnections(java.lang.Number)
//  .maxOpenConnections(java.lang.Number)
//  .namespace(java.lang.String)
//  .schema(java.lang.String)
//  .supportedTransformations(java.util.List<java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.Initializer.parameter.connectionString">connectionString</a></code> | <code>java.lang.String</code> | A database connection string with template slots for username and password that Vault will use for locating and connecting to a database. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.Initializer.parameter.driver">driver</a></code> | <code>java.lang.String</code> | Specifies the database driver to use, and thus which SQL database type. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of the store. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.Initializer.parameter.password">password</a></code> | <code>java.lang.String</code> | Password value to use to connect to database. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.Initializer.parameter.path">path</a></code> | <code>java.lang.String</code> | The mount path for a back-end, for example, the path given in "$ vault auth enable -path=my-aws aws". |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.Initializer.parameter.type">type</a></code> | <code>java.lang.String</code> | Specifies the type of store, currently only "sql" is supported,. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.Initializer.parameter.username">username</a></code> | <code>java.lang.String</code> | Username value to use to connect to database. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/transform_transformation_tokenization_store#id TransformTransformationTokenizationStore#id}. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.Initializer.parameter.maxConnectionLifetime">maxConnectionLifetime</a></code> | <code>java.lang.Number</code> | The maximum amount of time a connection can be open before closing it. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.Initializer.parameter.maxIdleConnections">maxIdleConnections</a></code> | <code>java.lang.Number</code> | The maximum number of idle connections to the database at any given time. Default is 4. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.Initializer.parameter.maxOpenConnections">maxOpenConnections</a></code> | <code>java.lang.Number</code> | The maximum number of connections to the database at any given time. Default is 4. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.Initializer.parameter.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.Initializer.parameter.schema">schema</a></code> | <code>java.lang.String</code> | The schema within the database to expect tokenization state tables. Default is "public". |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.Initializer.parameter.supportedTransformations">supportedTransformations</a></code> | <code>java.util.List<java.lang.String></code> | The types of transformations this store can support, currently only "tokenization" is supported. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `connectionString`<sup>Required</sup> <a name="connectionString" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.Initializer.parameter.connectionString"></a>

- *Type:* java.lang.String

A database connection string with template slots for username and password that Vault will use for locating and connecting to a database.

Each database driver type has a different syntax for its connection strings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/transform_transformation_tokenization_store#connection_string TransformTransformationTokenizationStore#connection_string}

---

##### `driver`<sup>Required</sup> <a name="driver" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.Initializer.parameter.driver"></a>

- *Type:* java.lang.String

Specifies the database driver to use, and thus which SQL database type.

Currently the supported options are postgres, mysql, and mssql.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/transform_transformation_tokenization_store#driver TransformTransformationTokenizationStore#driver}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of the store.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/transform_transformation_tokenization_store#name TransformTransformationTokenizationStore#name}

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.Initializer.parameter.password"></a>

- *Type:* java.lang.String

Password value to use to connect to database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/transform_transformation_tokenization_store#password TransformTransformationTokenizationStore#password}

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.Initializer.parameter.path"></a>

- *Type:* java.lang.String

The mount path for a back-end, for example, the path given in "$ vault auth enable -path=my-aws aws".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/transform_transformation_tokenization_store#path TransformTransformationTokenizationStore#path}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.Initializer.parameter.type"></a>

- *Type:* java.lang.String

Specifies the type of store, currently only "sql" is supported,.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/transform_transformation_tokenization_store#type TransformTransformationTokenizationStore#type}

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.Initializer.parameter.username"></a>

- *Type:* java.lang.String

Username value to use to connect to database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/transform_transformation_tokenization_store#username TransformTransformationTokenizationStore#username}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/transform_transformation_tokenization_store#id TransformTransformationTokenizationStore#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `maxConnectionLifetime`<sup>Optional</sup> <a name="maxConnectionLifetime" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.Initializer.parameter.maxConnectionLifetime"></a>

- *Type:* java.lang.Number

The maximum amount of time a connection can be open before closing it.

0 means no limit. Default is 0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/transform_transformation_tokenization_store#max_connection_lifetime TransformTransformationTokenizationStore#max_connection_lifetime}

---

##### `maxIdleConnections`<sup>Optional</sup> <a name="maxIdleConnections" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.Initializer.parameter.maxIdleConnections"></a>

- *Type:* java.lang.Number

The maximum number of idle connections to the database at any given time. Default is 4.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/transform_transformation_tokenization_store#max_idle_connections TransformTransformationTokenizationStore#max_idle_connections}

---

##### `maxOpenConnections`<sup>Optional</sup> <a name="maxOpenConnections" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.Initializer.parameter.maxOpenConnections"></a>

- *Type:* java.lang.Number

The maximum number of connections to the database at any given time. Default is 4.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/transform_transformation_tokenization_store#max_open_connections TransformTransformationTokenizationStore#max_open_connections}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.Initializer.parameter.namespace"></a>

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/transform_transformation_tokenization_store#namespace TransformTransformationTokenizationStore#namespace}

---

##### `schema`<sup>Optional</sup> <a name="schema" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.Initializer.parameter.schema"></a>

- *Type:* java.lang.String

The schema within the database to expect tokenization state tables. Default is "public".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/transform_transformation_tokenization_store#schema TransformTransformationTokenizationStore#schema}

---

##### `supportedTransformations`<sup>Optional</sup> <a name="supportedTransformations" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.Initializer.parameter.supportedTransformations"></a>

- *Type:* java.util.List<java.lang.String>

The types of transformations this store can support, currently only "tokenization" is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/transform_transformation_tokenization_store#supported_transformations TransformTransformationTokenizationStore#supported_transformations}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.resetMaxConnectionLifetime">resetMaxConnectionLifetime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.resetMaxIdleConnections">resetMaxIdleConnections</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.resetMaxOpenConnections">resetMaxOpenConnections</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.resetSchema">resetSchema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.resetSupportedTransformations">resetSupportedTransformations</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetId` <a name="resetId" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.resetId"></a>

```java
public void resetId()
```

##### `resetMaxConnectionLifetime` <a name="resetMaxConnectionLifetime" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.resetMaxConnectionLifetime"></a>

```java
public void resetMaxConnectionLifetime()
```

##### `resetMaxIdleConnections` <a name="resetMaxIdleConnections" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.resetMaxIdleConnections"></a>

```java
public void resetMaxIdleConnections()
```

##### `resetMaxOpenConnections` <a name="resetMaxOpenConnections" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.resetMaxOpenConnections"></a>

```java
public void resetMaxOpenConnections()
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.resetNamespace"></a>

```java
public void resetNamespace()
```

##### `resetSchema` <a name="resetSchema" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.resetSchema"></a>

```java
public void resetSchema()
```

##### `resetSupportedTransformations` <a name="resetSupportedTransformations" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.resetSupportedTransformations"></a>

```java
public void resetSupportedTransformations()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a TransformTransformationTokenizationStore resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.isConstruct"></a>

```java
import io.cdktn.providers.vault.transform_transformation_tokenization_store.TransformTransformationTokenizationStore;

TransformTransformationTokenizationStore.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.isTerraformElement"></a>

```java
import io.cdktn.providers.vault.transform_transformation_tokenization_store.TransformTransformationTokenizationStore;

TransformTransformationTokenizationStore.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.isTerraformResource"></a>

```java
import io.cdktn.providers.vault.transform_transformation_tokenization_store.TransformTransformationTokenizationStore;

TransformTransformationTokenizationStore.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.generateConfigForImport"></a>

```java
import io.cdktn.providers.vault.transform_transformation_tokenization_store.TransformTransformationTokenizationStore;

TransformTransformationTokenizationStore.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),TransformTransformationTokenizationStore.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a TransformTransformationTokenizationStore resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the TransformTransformationTokenizationStore to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing TransformTransformationTokenizationStore that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/transform_transformation_tokenization_store#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the TransformTransformationTokenizationStore to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.connectionStringInput">connectionStringInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.driverInput">driverInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.maxConnectionLifetimeInput">maxConnectionLifetimeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.maxIdleConnectionsInput">maxIdleConnectionsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.maxOpenConnectionsInput">maxOpenConnectionsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.passwordInput">passwordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.pathInput">pathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.schemaInput">schemaInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.supportedTransformationsInput">supportedTransformationsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.usernameInput">usernameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.connectionString">connectionString</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.driver">driver</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.maxConnectionLifetime">maxConnectionLifetime</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.maxIdleConnections">maxIdleConnections</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.maxOpenConnections">maxOpenConnections</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.password">password</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.path">path</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.schema">schema</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.supportedTransformations">supportedTransformations</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.username">username</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `connectionStringInput`<sup>Optional</sup> <a name="connectionStringInput" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.connectionStringInput"></a>

```java
public java.lang.String getConnectionStringInput();
```

- *Type:* java.lang.String

---

##### `driverInput`<sup>Optional</sup> <a name="driverInput" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.driverInput"></a>

```java
public java.lang.String getDriverInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `maxConnectionLifetimeInput`<sup>Optional</sup> <a name="maxConnectionLifetimeInput" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.maxConnectionLifetimeInput"></a>

```java
public java.lang.Number getMaxConnectionLifetimeInput();
```

- *Type:* java.lang.Number

---

##### `maxIdleConnectionsInput`<sup>Optional</sup> <a name="maxIdleConnectionsInput" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.maxIdleConnectionsInput"></a>

```java
public java.lang.Number getMaxIdleConnectionsInput();
```

- *Type:* java.lang.Number

---

##### `maxOpenConnectionsInput`<sup>Optional</sup> <a name="maxOpenConnectionsInput" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.maxOpenConnectionsInput"></a>

```java
public java.lang.Number getMaxOpenConnectionsInput();
```

- *Type:* java.lang.Number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.passwordInput"></a>

```java
public java.lang.String getPasswordInput();
```

- *Type:* java.lang.String

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.pathInput"></a>

```java
public java.lang.String getPathInput();
```

- *Type:* java.lang.String

---

##### `schemaInput`<sup>Optional</sup> <a name="schemaInput" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.schemaInput"></a>

```java
public java.lang.String getSchemaInput();
```

- *Type:* java.lang.String

---

##### `supportedTransformationsInput`<sup>Optional</sup> <a name="supportedTransformationsInput" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.supportedTransformationsInput"></a>

```java
public java.util.List<java.lang.String> getSupportedTransformationsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.usernameInput"></a>

```java
public java.lang.String getUsernameInput();
```

- *Type:* java.lang.String

---

##### `connectionString`<sup>Required</sup> <a name="connectionString" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.connectionString"></a>

```java
public java.lang.String getConnectionString();
```

- *Type:* java.lang.String

---

##### `driver`<sup>Required</sup> <a name="driver" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.driver"></a>

```java
public java.lang.String getDriver();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `maxConnectionLifetime`<sup>Required</sup> <a name="maxConnectionLifetime" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.maxConnectionLifetime"></a>

```java
public java.lang.Number getMaxConnectionLifetime();
```

- *Type:* java.lang.Number

---

##### `maxIdleConnections`<sup>Required</sup> <a name="maxIdleConnections" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.maxIdleConnections"></a>

```java
public java.lang.Number getMaxIdleConnections();
```

- *Type:* java.lang.Number

---

##### `maxOpenConnections`<sup>Required</sup> <a name="maxOpenConnections" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.maxOpenConnections"></a>

```java
public java.lang.Number getMaxOpenConnections();
```

- *Type:* java.lang.Number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.schema"></a>

```java
public java.lang.String getSchema();
```

- *Type:* java.lang.String

---

##### `supportedTransformations`<sup>Required</sup> <a name="supportedTransformations" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.supportedTransformations"></a>

```java
public java.util.List<java.lang.String> getSupportedTransformations();
```

- *Type:* java.util.List<java.lang.String>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### TransformTransformationTokenizationStoreConfig <a name="TransformTransformationTokenizationStoreConfig" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStoreConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStoreConfig.Initializer"></a>

```java
import io.cdktn.providers.vault.transform_transformation_tokenization_store.TransformTransformationTokenizationStoreConfig;

TransformTransformationTokenizationStoreConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .connectionString(java.lang.String)
    .driver(java.lang.String)
    .name(java.lang.String)
    .password(java.lang.String)
    .path(java.lang.String)
    .type(java.lang.String)
    .username(java.lang.String)
//  .id(java.lang.String)
//  .maxConnectionLifetime(java.lang.Number)
//  .maxIdleConnections(java.lang.Number)
//  .maxOpenConnections(java.lang.Number)
//  .namespace(java.lang.String)
//  .schema(java.lang.String)
//  .supportedTransformations(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStoreConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStoreConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStoreConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStoreConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStoreConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStoreConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStoreConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStoreConfig.property.connectionString">connectionString</a></code> | <code>java.lang.String</code> | A database connection string with template slots for username and password that Vault will use for locating and connecting to a database. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStoreConfig.property.driver">driver</a></code> | <code>java.lang.String</code> | Specifies the database driver to use, and thus which SQL database type. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStoreConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of the store. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStoreConfig.property.password">password</a></code> | <code>java.lang.String</code> | Password value to use to connect to database. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStoreConfig.property.path">path</a></code> | <code>java.lang.String</code> | The mount path for a back-end, for example, the path given in "$ vault auth enable -path=my-aws aws". |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStoreConfig.property.type">type</a></code> | <code>java.lang.String</code> | Specifies the type of store, currently only "sql" is supported,. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStoreConfig.property.username">username</a></code> | <code>java.lang.String</code> | Username value to use to connect to database. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStoreConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/transform_transformation_tokenization_store#id TransformTransformationTokenizationStore#id}. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStoreConfig.property.maxConnectionLifetime">maxConnectionLifetime</a></code> | <code>java.lang.Number</code> | The maximum amount of time a connection can be open before closing it. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStoreConfig.property.maxIdleConnections">maxIdleConnections</a></code> | <code>java.lang.Number</code> | The maximum number of idle connections to the database at any given time. Default is 4. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStoreConfig.property.maxOpenConnections">maxOpenConnections</a></code> | <code>java.lang.Number</code> | The maximum number of connections to the database at any given time. Default is 4. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStoreConfig.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStoreConfig.property.schema">schema</a></code> | <code>java.lang.String</code> | The schema within the database to expect tokenization state tables. Default is "public". |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStoreConfig.property.supportedTransformations">supportedTransformations</a></code> | <code>java.util.List<java.lang.String></code> | The types of transformations this store can support, currently only "tokenization" is supported. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStoreConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStoreConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStoreConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStoreConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStoreConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStoreConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStoreConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `connectionString`<sup>Required</sup> <a name="connectionString" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStoreConfig.property.connectionString"></a>

```java
public java.lang.String getConnectionString();
```

- *Type:* java.lang.String

A database connection string with template slots for username and password that Vault will use for locating and connecting to a database.

Each database driver type has a different syntax for its connection strings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/transform_transformation_tokenization_store#connection_string TransformTransformationTokenizationStore#connection_string}

---

##### `driver`<sup>Required</sup> <a name="driver" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStoreConfig.property.driver"></a>

```java
public java.lang.String getDriver();
```

- *Type:* java.lang.String

Specifies the database driver to use, and thus which SQL database type.

Currently the supported options are postgres, mysql, and mssql.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/transform_transformation_tokenization_store#driver TransformTransformationTokenizationStore#driver}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStoreConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the store.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/transform_transformation_tokenization_store#name TransformTransformationTokenizationStore#name}

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStoreConfig.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

Password value to use to connect to database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/transform_transformation_tokenization_store#password TransformTransformationTokenizationStore#password}

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStoreConfig.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

The mount path for a back-end, for example, the path given in "$ vault auth enable -path=my-aws aws".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/transform_transformation_tokenization_store#path TransformTransformationTokenizationStore#path}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStoreConfig.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Specifies the type of store, currently only "sql" is supported,.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/transform_transformation_tokenization_store#type TransformTransformationTokenizationStore#type}

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStoreConfig.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

Username value to use to connect to database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/transform_transformation_tokenization_store#username TransformTransformationTokenizationStore#username}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStoreConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/transform_transformation_tokenization_store#id TransformTransformationTokenizationStore#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `maxConnectionLifetime`<sup>Optional</sup> <a name="maxConnectionLifetime" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStoreConfig.property.maxConnectionLifetime"></a>

```java
public java.lang.Number getMaxConnectionLifetime();
```

- *Type:* java.lang.Number

The maximum amount of time a connection can be open before closing it.

0 means no limit. Default is 0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/transform_transformation_tokenization_store#max_connection_lifetime TransformTransformationTokenizationStore#max_connection_lifetime}

---

##### `maxIdleConnections`<sup>Optional</sup> <a name="maxIdleConnections" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStoreConfig.property.maxIdleConnections"></a>

```java
public java.lang.Number getMaxIdleConnections();
```

- *Type:* java.lang.Number

The maximum number of idle connections to the database at any given time. Default is 4.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/transform_transformation_tokenization_store#max_idle_connections TransformTransformationTokenizationStore#max_idle_connections}

---

##### `maxOpenConnections`<sup>Optional</sup> <a name="maxOpenConnections" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStoreConfig.property.maxOpenConnections"></a>

```java
public java.lang.Number getMaxOpenConnections();
```

- *Type:* java.lang.Number

The maximum number of connections to the database at any given time. Default is 4.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/transform_transformation_tokenization_store#max_open_connections TransformTransformationTokenizationStore#max_open_connections}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStoreConfig.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/transform_transformation_tokenization_store#namespace TransformTransformationTokenizationStore#namespace}

---

##### `schema`<sup>Optional</sup> <a name="schema" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStoreConfig.property.schema"></a>

```java
public java.lang.String getSchema();
```

- *Type:* java.lang.String

The schema within the database to expect tokenization state tables. Default is "public".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/transform_transformation_tokenization_store#schema TransformTransformationTokenizationStore#schema}

---

##### `supportedTransformations`<sup>Optional</sup> <a name="supportedTransformations" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStoreConfig.property.supportedTransformations"></a>

```java
public java.util.List<java.lang.String> getSupportedTransformations();
```

- *Type:* java.util.List<java.lang.String>

The types of transformations this store can support, currently only "tokenization" is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/transform_transformation_tokenization_store#supported_transformations TransformTransformationTokenizationStore#supported_transformations}

---



