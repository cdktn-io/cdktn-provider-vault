# `transformTransformationTokenizationStore` Submodule <a name="`transformTransformationTokenizationStore` Submodule" id="@cdktn/provider-vault.transformTransformationTokenizationStore"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### TransformTransformationTokenizationStore <a name="TransformTransformationTokenizationStore" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/transform_transformation_tokenization_store vault_transform_transformation_tokenization_store}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.Initializer"></a>

```python
from cdktn_provider_vault import transform_transformation_tokenization_store

transformTransformationTokenizationStore.TransformTransformationTokenizationStore(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  connection_string: str,
  driver: str,
  name: str,
  password: str,
  path: str,
  type: str,
  username: str,
  id: str = None,
  max_connection_lifetime: typing.Union[int, float] = None,
  max_idle_connections: typing.Union[int, float] = None,
  max_open_connections: typing.Union[int, float] = None,
  namespace: str = None,
  schema: str = None,
  supported_transformations: typing.List[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.Initializer.parameter.connectionString">connection_string</a></code> | <code>str</code> | A database connection string with template slots for username and password that Vault will use for locating and connecting to a database. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.Initializer.parameter.driver">driver</a></code> | <code>str</code> | Specifies the database driver to use, and thus which SQL database type. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the store. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.Initializer.parameter.password">password</a></code> | <code>str</code> | Password value to use to connect to database. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.Initializer.parameter.path">path</a></code> | <code>str</code> | The mount path for a back-end, for example, the path given in "$ vault auth enable -path=my-aws aws". |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.Initializer.parameter.type">type</a></code> | <code>str</code> | Specifies the type of store, currently only "sql" is supported,. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.Initializer.parameter.username">username</a></code> | <code>str</code> | Username value to use to connect to database. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/transform_transformation_tokenization_store#id TransformTransformationTokenizationStore#id}. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.Initializer.parameter.maxConnectionLifetime">max_connection_lifetime</a></code> | <code>typing.Union[int, float]</code> | The maximum amount of time a connection can be open before closing it. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.Initializer.parameter.maxIdleConnections">max_idle_connections</a></code> | <code>typing.Union[int, float]</code> | The maximum number of idle connections to the database at any given time. Default is 4. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.Initializer.parameter.maxOpenConnections">max_open_connections</a></code> | <code>typing.Union[int, float]</code> | The maximum number of connections to the database at any given time. Default is 4. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.Initializer.parameter.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.Initializer.parameter.schema">schema</a></code> | <code>str</code> | The schema within the database to expect tokenization state tables. Default is "public". |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.Initializer.parameter.supportedTransformations">supported_transformations</a></code> | <code>typing.List[str]</code> | The types of transformations this store can support, currently only "tokenization" is supported. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `connection_string`<sup>Required</sup> <a name="connection_string" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.Initializer.parameter.connectionString"></a>

- *Type:* str

A database connection string with template slots for username and password that Vault will use for locating and connecting to a database.

Each database driver type has a different syntax for its connection strings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/transform_transformation_tokenization_store#connection_string TransformTransformationTokenizationStore#connection_string}

---

##### `driver`<sup>Required</sup> <a name="driver" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.Initializer.parameter.driver"></a>

- *Type:* str

Specifies the database driver to use, and thus which SQL database type.

Currently the supported options are postgres, mysql, and mssql.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/transform_transformation_tokenization_store#driver TransformTransformationTokenizationStore#driver}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.Initializer.parameter.name"></a>

- *Type:* str

The name of the store.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/transform_transformation_tokenization_store#name TransformTransformationTokenizationStore#name}

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.Initializer.parameter.password"></a>

- *Type:* str

Password value to use to connect to database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/transform_transformation_tokenization_store#password TransformTransformationTokenizationStore#password}

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.Initializer.parameter.path"></a>

- *Type:* str

The mount path for a back-end, for example, the path given in "$ vault auth enable -path=my-aws aws".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/transform_transformation_tokenization_store#path TransformTransformationTokenizationStore#path}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.Initializer.parameter.type"></a>

- *Type:* str

Specifies the type of store, currently only "sql" is supported,.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/transform_transformation_tokenization_store#type TransformTransformationTokenizationStore#type}

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.Initializer.parameter.username"></a>

- *Type:* str

Username value to use to connect to database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/transform_transformation_tokenization_store#username TransformTransformationTokenizationStore#username}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/transform_transformation_tokenization_store#id TransformTransformationTokenizationStore#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `max_connection_lifetime`<sup>Optional</sup> <a name="max_connection_lifetime" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.Initializer.parameter.maxConnectionLifetime"></a>

- *Type:* typing.Union[int, float]

The maximum amount of time a connection can be open before closing it.

0 means no limit. Default is 0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/transform_transformation_tokenization_store#max_connection_lifetime TransformTransformationTokenizationStore#max_connection_lifetime}

---

##### `max_idle_connections`<sup>Optional</sup> <a name="max_idle_connections" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.Initializer.parameter.maxIdleConnections"></a>

- *Type:* typing.Union[int, float]

The maximum number of idle connections to the database at any given time. Default is 4.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/transform_transformation_tokenization_store#max_idle_connections TransformTransformationTokenizationStore#max_idle_connections}

---

##### `max_open_connections`<sup>Optional</sup> <a name="max_open_connections" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.Initializer.parameter.maxOpenConnections"></a>

- *Type:* typing.Union[int, float]

The maximum number of connections to the database at any given time. Default is 4.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/transform_transformation_tokenization_store#max_open_connections TransformTransformationTokenizationStore#max_open_connections}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.Initializer.parameter.namespace"></a>

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/transform_transformation_tokenization_store#namespace TransformTransformationTokenizationStore#namespace}

---

##### `schema`<sup>Optional</sup> <a name="schema" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.Initializer.parameter.schema"></a>

- *Type:* str

The schema within the database to expect tokenization state tables. Default is "public".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/transform_transformation_tokenization_store#schema TransformTransformationTokenizationStore#schema}

---

##### `supported_transformations`<sup>Optional</sup> <a name="supported_transformations" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.Initializer.parameter.supportedTransformations"></a>

- *Type:* typing.List[str]

The types of transformations this store can support, currently only "tokenization" is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/transform_transformation_tokenization_store#supported_transformations TransformTransformationTokenizationStore#supported_transformations}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.resetMaxConnectionLifetime">reset_max_connection_lifetime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.resetMaxIdleConnections">reset_max_idle_connections</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.resetMaxOpenConnections">reset_max_open_connections</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.resetNamespace">reset_namespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.resetSchema">reset_schema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.resetSupportedTransformations">reset_supported_transformations</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.with"></a>

```python
def with(
  mixins: *IMixin
) -> IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_id` <a name="reset_id" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_max_connection_lifetime` <a name="reset_max_connection_lifetime" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.resetMaxConnectionLifetime"></a>

```python
def reset_max_connection_lifetime() -> None
```

##### `reset_max_idle_connections` <a name="reset_max_idle_connections" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.resetMaxIdleConnections"></a>

```python
def reset_max_idle_connections() -> None
```

##### `reset_max_open_connections` <a name="reset_max_open_connections" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.resetMaxOpenConnections"></a>

```python
def reset_max_open_connections() -> None
```

##### `reset_namespace` <a name="reset_namespace" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.resetNamespace"></a>

```python
def reset_namespace() -> None
```

##### `reset_schema` <a name="reset_schema" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.resetSchema"></a>

```python
def reset_schema() -> None
```

##### `reset_supported_transformations` <a name="reset_supported_transformations" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.resetSupportedTransformations"></a>

```python
def reset_supported_transformations() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a TransformTransformationTokenizationStore resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.isConstruct"></a>

```python
from cdktn_provider_vault import transform_transformation_tokenization_store

transformTransformationTokenizationStore.TransformTransformationTokenizationStore.is_construct(
  x: typing.Any
)
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

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.isTerraformElement"></a>

```python
from cdktn_provider_vault import transform_transformation_tokenization_store

transformTransformationTokenizationStore.TransformTransformationTokenizationStore.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.isTerraformResource"></a>

```python
from cdktn_provider_vault import transform_transformation_tokenization_store

transformTransformationTokenizationStore.TransformTransformationTokenizationStore.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.generateConfigForImport"></a>

```python
from cdktn_provider_vault import transform_transformation_tokenization_store

transformTransformationTokenizationStore.TransformTransformationTokenizationStore.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a TransformTransformationTokenizationStore resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the TransformTransformationTokenizationStore to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing TransformTransformationTokenizationStore that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/transform_transformation_tokenization_store#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the TransformTransformationTokenizationStore to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.connectionStringInput">connection_string_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.driverInput">driver_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.maxConnectionLifetimeInput">max_connection_lifetime_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.maxIdleConnectionsInput">max_idle_connections_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.maxOpenConnectionsInput">max_open_connections_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.passwordInput">password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.pathInput">path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.schemaInput">schema_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.supportedTransformationsInput">supported_transformations_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.usernameInput">username_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.connectionString">connection_string</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.driver">driver</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.maxConnectionLifetime">max_connection_lifetime</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.maxIdleConnections">max_idle_connections</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.maxOpenConnections">max_open_connections</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.password">password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.schema">schema</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.supportedTransformations">supported_transformations</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.username">username</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `connection_string_input`<sup>Optional</sup> <a name="connection_string_input" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.connectionStringInput"></a>

```python
connection_string_input: str
```

- *Type:* str

---

##### `driver_input`<sup>Optional</sup> <a name="driver_input" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.driverInput"></a>

```python
driver_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `max_connection_lifetime_input`<sup>Optional</sup> <a name="max_connection_lifetime_input" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.maxConnectionLifetimeInput"></a>

```python
max_connection_lifetime_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_idle_connections_input`<sup>Optional</sup> <a name="max_idle_connections_input" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.maxIdleConnectionsInput"></a>

```python
max_idle_connections_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_open_connections_input`<sup>Optional</sup> <a name="max_open_connections_input" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.maxOpenConnectionsInput"></a>

```python
max_open_connections_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `password_input`<sup>Optional</sup> <a name="password_input" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.passwordInput"></a>

```python
password_input: str
```

- *Type:* str

---

##### `path_input`<sup>Optional</sup> <a name="path_input" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.pathInput"></a>

```python
path_input: str
```

- *Type:* str

---

##### `schema_input`<sup>Optional</sup> <a name="schema_input" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.schemaInput"></a>

```python
schema_input: str
```

- *Type:* str

---

##### `supported_transformations_input`<sup>Optional</sup> <a name="supported_transformations_input" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.supportedTransformationsInput"></a>

```python
supported_transformations_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `username_input`<sup>Optional</sup> <a name="username_input" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.usernameInput"></a>

```python
username_input: str
```

- *Type:* str

---

##### `connection_string`<sup>Required</sup> <a name="connection_string" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.connectionString"></a>

```python
connection_string: str
```

- *Type:* str

---

##### `driver`<sup>Required</sup> <a name="driver" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.driver"></a>

```python
driver: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `max_connection_lifetime`<sup>Required</sup> <a name="max_connection_lifetime" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.maxConnectionLifetime"></a>

```python
max_connection_lifetime: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_idle_connections`<sup>Required</sup> <a name="max_idle_connections" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.maxIdleConnections"></a>

```python
max_idle_connections: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_open_connections`<sup>Required</sup> <a name="max_open_connections" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.maxOpenConnections"></a>

```python
max_open_connections: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.password"></a>

```python
password: str
```

- *Type:* str

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.schema"></a>

```python
schema: str
```

- *Type:* str

---

##### `supported_transformations`<sup>Required</sup> <a name="supported_transformations" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.supportedTransformations"></a>

```python
supported_transformations: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.username"></a>

```python
username: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### TransformTransformationTokenizationStoreConfig <a name="TransformTransformationTokenizationStoreConfig" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStoreConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStoreConfig.Initializer"></a>

```python
from cdktn_provider_vault import transform_transformation_tokenization_store

transformTransformationTokenizationStore.TransformTransformationTokenizationStoreConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  connection_string: str,
  driver: str,
  name: str,
  password: str,
  path: str,
  type: str,
  username: str,
  id: str = None,
  max_connection_lifetime: typing.Union[int, float] = None,
  max_idle_connections: typing.Union[int, float] = None,
  max_open_connections: typing.Union[int, float] = None,
  namespace: str = None,
  schema: str = None,
  supported_transformations: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStoreConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStoreConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStoreConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStoreConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStoreConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStoreConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStoreConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStoreConfig.property.connectionString">connection_string</a></code> | <code>str</code> | A database connection string with template slots for username and password that Vault will use for locating and connecting to a database. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStoreConfig.property.driver">driver</a></code> | <code>str</code> | Specifies the database driver to use, and thus which SQL database type. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStoreConfig.property.name">name</a></code> | <code>str</code> | The name of the store. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStoreConfig.property.password">password</a></code> | <code>str</code> | Password value to use to connect to database. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStoreConfig.property.path">path</a></code> | <code>str</code> | The mount path for a back-end, for example, the path given in "$ vault auth enable -path=my-aws aws". |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStoreConfig.property.type">type</a></code> | <code>str</code> | Specifies the type of store, currently only "sql" is supported,. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStoreConfig.property.username">username</a></code> | <code>str</code> | Username value to use to connect to database. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStoreConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/transform_transformation_tokenization_store#id TransformTransformationTokenizationStore#id}. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStoreConfig.property.maxConnectionLifetime">max_connection_lifetime</a></code> | <code>typing.Union[int, float]</code> | The maximum amount of time a connection can be open before closing it. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStoreConfig.property.maxIdleConnections">max_idle_connections</a></code> | <code>typing.Union[int, float]</code> | The maximum number of idle connections to the database at any given time. Default is 4. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStoreConfig.property.maxOpenConnections">max_open_connections</a></code> | <code>typing.Union[int, float]</code> | The maximum number of connections to the database at any given time. Default is 4. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStoreConfig.property.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStoreConfig.property.schema">schema</a></code> | <code>str</code> | The schema within the database to expect tokenization state tables. Default is "public". |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStoreConfig.property.supportedTransformations">supported_transformations</a></code> | <code>typing.List[str]</code> | The types of transformations this store can support, currently only "tokenization" is supported. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStoreConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStoreConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStoreConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStoreConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStoreConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStoreConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStoreConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `connection_string`<sup>Required</sup> <a name="connection_string" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStoreConfig.property.connectionString"></a>

```python
connection_string: str
```

- *Type:* str

A database connection string with template slots for username and password that Vault will use for locating and connecting to a database.

Each database driver type has a different syntax for its connection strings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/transform_transformation_tokenization_store#connection_string TransformTransformationTokenizationStore#connection_string}

---

##### `driver`<sup>Required</sup> <a name="driver" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStoreConfig.property.driver"></a>

```python
driver: str
```

- *Type:* str

Specifies the database driver to use, and thus which SQL database type.

Currently the supported options are postgres, mysql, and mssql.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/transform_transformation_tokenization_store#driver TransformTransformationTokenizationStore#driver}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStoreConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the store.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/transform_transformation_tokenization_store#name TransformTransformationTokenizationStore#name}

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStoreConfig.property.password"></a>

```python
password: str
```

- *Type:* str

Password value to use to connect to database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/transform_transformation_tokenization_store#password TransformTransformationTokenizationStore#password}

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStoreConfig.property.path"></a>

```python
path: str
```

- *Type:* str

The mount path for a back-end, for example, the path given in "$ vault auth enable -path=my-aws aws".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/transform_transformation_tokenization_store#path TransformTransformationTokenizationStore#path}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStoreConfig.property.type"></a>

```python
type: str
```

- *Type:* str

Specifies the type of store, currently only "sql" is supported,.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/transform_transformation_tokenization_store#type TransformTransformationTokenizationStore#type}

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStoreConfig.property.username"></a>

```python
username: str
```

- *Type:* str

Username value to use to connect to database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/transform_transformation_tokenization_store#username TransformTransformationTokenizationStore#username}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStoreConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/transform_transformation_tokenization_store#id TransformTransformationTokenizationStore#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `max_connection_lifetime`<sup>Optional</sup> <a name="max_connection_lifetime" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStoreConfig.property.maxConnectionLifetime"></a>

```python
max_connection_lifetime: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The maximum amount of time a connection can be open before closing it.

0 means no limit. Default is 0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/transform_transformation_tokenization_store#max_connection_lifetime TransformTransformationTokenizationStore#max_connection_lifetime}

---

##### `max_idle_connections`<sup>Optional</sup> <a name="max_idle_connections" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStoreConfig.property.maxIdleConnections"></a>

```python
max_idle_connections: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The maximum number of idle connections to the database at any given time. Default is 4.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/transform_transformation_tokenization_store#max_idle_connections TransformTransformationTokenizationStore#max_idle_connections}

---

##### `max_open_connections`<sup>Optional</sup> <a name="max_open_connections" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStoreConfig.property.maxOpenConnections"></a>

```python
max_open_connections: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The maximum number of connections to the database at any given time. Default is 4.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/transform_transformation_tokenization_store#max_open_connections TransformTransformationTokenizationStore#max_open_connections}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStoreConfig.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/transform_transformation_tokenization_store#namespace TransformTransformationTokenizationStore#namespace}

---

##### `schema`<sup>Optional</sup> <a name="schema" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStoreConfig.property.schema"></a>

```python
schema: str
```

- *Type:* str

The schema within the database to expect tokenization state tables. Default is "public".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/transform_transformation_tokenization_store#schema TransformTransformationTokenizationStore#schema}

---

##### `supported_transformations`<sup>Optional</sup> <a name="supported_transformations" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStoreConfig.property.supportedTransformations"></a>

```python
supported_transformations: typing.List[str]
```

- *Type:* typing.List[str]

The types of transformations this store can support, currently only "tokenization" is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/transform_transformation_tokenization_store#supported_transformations TransformTransformationTokenizationStore#supported_transformations}

---



