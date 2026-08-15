# `dataVaultGcpkmsVerify` Submodule <a name="`dataVaultGcpkmsVerify` Submodule" id="@cdktn/provider-vault.dataVaultGcpkmsVerify"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataVaultGcpkmsVerify <a name="DataVaultGcpkmsVerify" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/data-sources/gcpkms_verify vault_gcpkms_verify}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.Initializer"></a>

```python
from cdktn_provider_vault import data_vault_gcpkms_verify

dataVaultGcpkmsVerify.DataVaultGcpkmsVerify(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  digest: str,
  key_name: str,
  key_version: typing.Union[int, float],
  mount: str,
  signature: str,
  namespace: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.Initializer.parameter.digest">digest</a></code> | <code>str</code> | Base64-encoded digest to verify. |
| <code><a href="#@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.Initializer.parameter.keyName">key_name</a></code> | <code>str</code> | Name of the Vault key to use for verification. |
| <code><a href="#@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.Initializer.parameter.keyVersion">key_version</a></code> | <code>typing.Union[int, float]</code> | Version of the key to use for verification. |
| <code><a href="#@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.Initializer.parameter.mount">mount</a></code> | <code>str</code> | Path where the GCP KMS secrets engine is mounted. |
| <code><a href="#@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.Initializer.parameter.signature">signature</a></code> | <code>str</code> | Base64-encoded signature to verify. |
| <code><a href="#@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.Initializer.parameter.namespace">namespace</a></code> | <code>str</code> | Target namespace. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `digest`<sup>Required</sup> <a name="digest" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.Initializer.parameter.digest"></a>

- *Type:* str

Base64-encoded digest to verify.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/data-sources/gcpkms_verify#digest DataVaultGcpkmsVerify#digest}

---

##### `key_name`<sup>Required</sup> <a name="key_name" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.Initializer.parameter.keyName"></a>

- *Type:* str

Name of the Vault key to use for verification.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/data-sources/gcpkms_verify#key_name DataVaultGcpkmsVerify#key_name}

---

##### `key_version`<sup>Required</sup> <a name="key_version" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.Initializer.parameter.keyVersion"></a>

- *Type:* typing.Union[int, float]

Version of the key to use for verification.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/data-sources/gcpkms_verify#key_version DataVaultGcpkmsVerify#key_version}

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.Initializer.parameter.mount"></a>

- *Type:* str

Path where the GCP KMS secrets engine is mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/data-sources/gcpkms_verify#mount DataVaultGcpkmsVerify#mount}

---

##### `signature`<sup>Required</sup> <a name="signature" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.Initializer.parameter.signature"></a>

- *Type:* str

Base64-encoded signature to verify.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/data-sources/gcpkms_verify#signature DataVaultGcpkmsVerify#signature}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.Initializer.parameter.namespace"></a>

- *Type:* str

Target namespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/data-sources/gcpkms_verify#namespace DataVaultGcpkmsVerify#namespace}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.resetNamespace">reset_namespace</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_namespace` <a name="reset_namespace" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.resetNamespace"></a>

```python
def reset_namespace() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataVaultGcpkmsVerify resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.isConstruct"></a>

```python
from cdktn_provider_vault import data_vault_gcpkms_verify

dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.isTerraformElement"></a>

```python
from cdktn_provider_vault import data_vault_gcpkms_verify

dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.isTerraformDataSource"></a>

```python
from cdktn_provider_vault import data_vault_gcpkms_verify

dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.generateConfigForImport"></a>

```python
from cdktn_provider_vault import data_vault_gcpkms_verify

dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataVaultGcpkmsVerify resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataVaultGcpkmsVerify to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataVaultGcpkmsVerify that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/data-sources/gcpkms_verify#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataVaultGcpkmsVerify to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.property.valid">valid</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.property.digestInput">digest_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.property.keyNameInput">key_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.property.keyVersionInput">key_version_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.property.mountInput">mount_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.property.signatureInput">signature_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.property.digest">digest</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.property.keyName">key_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.property.keyVersion">key_version</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.property.mount">mount</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.property.signature">signature</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `valid`<sup>Required</sup> <a name="valid" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.property.valid"></a>

```python
valid: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `digest_input`<sup>Optional</sup> <a name="digest_input" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.property.digestInput"></a>

```python
digest_input: str
```

- *Type:* str

---

##### `key_name_input`<sup>Optional</sup> <a name="key_name_input" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.property.keyNameInput"></a>

```python
key_name_input: str
```

- *Type:* str

---

##### `key_version_input`<sup>Optional</sup> <a name="key_version_input" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.property.keyVersionInput"></a>

```python
key_version_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `mount_input`<sup>Optional</sup> <a name="mount_input" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.property.mountInput"></a>

```python
mount_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `signature_input`<sup>Optional</sup> <a name="signature_input" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.property.signatureInput"></a>

```python
signature_input: str
```

- *Type:* str

---

##### `digest`<sup>Required</sup> <a name="digest" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.property.digest"></a>

```python
digest: str
```

- *Type:* str

---

##### `key_name`<sup>Required</sup> <a name="key_name" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.property.keyName"></a>

```python
key_name: str
```

- *Type:* str

---

##### `key_version`<sup>Required</sup> <a name="key_version" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.property.keyVersion"></a>

```python
key_version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.property.mount"></a>

```python
mount: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `signature`<sup>Required</sup> <a name="signature" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.property.signature"></a>

```python
signature: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataVaultGcpkmsVerifyConfig <a name="DataVaultGcpkmsVerifyConfig" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerifyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerifyConfig.Initializer"></a>

```python
from cdktn_provider_vault import data_vault_gcpkms_verify

dataVaultGcpkmsVerify.DataVaultGcpkmsVerifyConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  digest: str,
  key_name: str,
  key_version: typing.Union[int, float],
  mount: str,
  signature: str,
  namespace: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerifyConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerifyConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerifyConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerifyConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerifyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerifyConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerifyConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerifyConfig.property.digest">digest</a></code> | <code>str</code> | Base64-encoded digest to verify. |
| <code><a href="#@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerifyConfig.property.keyName">key_name</a></code> | <code>str</code> | Name of the Vault key to use for verification. |
| <code><a href="#@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerifyConfig.property.keyVersion">key_version</a></code> | <code>typing.Union[int, float]</code> | Version of the key to use for verification. |
| <code><a href="#@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerifyConfig.property.mount">mount</a></code> | <code>str</code> | Path where the GCP KMS secrets engine is mounted. |
| <code><a href="#@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerifyConfig.property.signature">signature</a></code> | <code>str</code> | Base64-encoded signature to verify. |
| <code><a href="#@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerifyConfig.property.namespace">namespace</a></code> | <code>str</code> | Target namespace. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerifyConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerifyConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerifyConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerifyConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerifyConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerifyConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerifyConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `digest`<sup>Required</sup> <a name="digest" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerifyConfig.property.digest"></a>

```python
digest: str
```

- *Type:* str

Base64-encoded digest to verify.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/data-sources/gcpkms_verify#digest DataVaultGcpkmsVerify#digest}

---

##### `key_name`<sup>Required</sup> <a name="key_name" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerifyConfig.property.keyName"></a>

```python
key_name: str
```

- *Type:* str

Name of the Vault key to use for verification.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/data-sources/gcpkms_verify#key_name DataVaultGcpkmsVerify#key_name}

---

##### `key_version`<sup>Required</sup> <a name="key_version" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerifyConfig.property.keyVersion"></a>

```python
key_version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Version of the key to use for verification.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/data-sources/gcpkms_verify#key_version DataVaultGcpkmsVerify#key_version}

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerifyConfig.property.mount"></a>

```python
mount: str
```

- *Type:* str

Path where the GCP KMS secrets engine is mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/data-sources/gcpkms_verify#mount DataVaultGcpkmsVerify#mount}

---

##### `signature`<sup>Required</sup> <a name="signature" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerifyConfig.property.signature"></a>

```python
signature: str
```

- *Type:* str

Base64-encoded signature to verify.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/data-sources/gcpkms_verify#signature DataVaultGcpkmsVerify#signature}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerifyConfig.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Target namespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/data-sources/gcpkms_verify#namespace DataVaultGcpkmsVerify#namespace}

---



