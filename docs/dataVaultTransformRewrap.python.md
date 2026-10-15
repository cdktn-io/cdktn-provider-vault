# `dataVaultTransformRewrap` Submodule <a name="`dataVaultTransformRewrap` Submodule" id="@cdktn/provider-vault.dataVaultTransformRewrap"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataVaultTransformRewrap <a name="DataVaultTransformRewrap" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/data-sources/transform_rewrap vault_transform_rewrap}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.Initializer"></a>

```python
from cdktn_provider_vault import data_vault_transform_rewrap

dataVaultTransformRewrap.DataVaultTransformRewrap(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  path: str,
  role_name: str,
  batch_input: IResolvable | typing.List[typing.Mapping[str]] = None,
  decode_transformation: str = None,
  decode_tweak: str = None,
  encoded_value: str = None,
  id: str = None,
  namespace: str = None,
  transformation: str = None,
  tweak: str = None,
  value: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.Initializer.parameter.path">path</a></code> | <code>str</code> | Path to backend from which to retrieve data. |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.Initializer.parameter.roleName">role_name</a></code> | <code>str</code> | The name of the role. |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.Initializer.parameter.batchInput">batch_input</a></code> | <code>cdktn.IResolvable \| typing.List[typing.Mapping[str]]</code> | Specifies a list of items to be re-encoded in a single batch. |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.Initializer.parameter.decodeTransformation">decode_transformation</a></code> | <code>str</code> | The FPE transformation to use to decode the value. |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.Initializer.parameter.decodeTweak">decode_tweak</a></code> | <code>str</code> | The tweak value to use for decoding. Only applicable for FPE transformations with a supplied tweak source. |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.Initializer.parameter.encodedValue">encoded_value</a></code> | <code>str</code> | The result of rewrapping a value. |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/data-sources/transform_rewrap#id DataVaultTransformRewrap#id}. |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.Initializer.parameter.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.Initializer.parameter.transformation">transformation</a></code> | <code>str</code> | The FPE transformation to use for re-encrypting the value. |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.Initializer.parameter.tweak">tweak</a></code> | <code>str</code> | The tweak value to use for re-encrypting. Only applicable for FPE transformations with a supplied tweak source. |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.Initializer.parameter.value">value</a></code> | <code>str</code> | The value to rewrap. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.Initializer.parameter.path"></a>

- *Type:* str

Path to backend from which to retrieve data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/data-sources/transform_rewrap#path DataVaultTransformRewrap#path}

---

##### `role_name`<sup>Required</sup> <a name="role_name" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.Initializer.parameter.roleName"></a>

- *Type:* str

The name of the role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/data-sources/transform_rewrap#role_name DataVaultTransformRewrap#role_name}

---

##### `batch_input`<sup>Optional</sup> <a name="batch_input" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.Initializer.parameter.batchInput"></a>

- *Type:* cdktn.IResolvable | typing.List[typing.Mapping[str]]

Specifies a list of items to be re-encoded in a single batch.

If this parameter is set, the top-level parameters 'value', 'transformation', 'decode_transformation', 'tweak', and 'decode_tweak' will be ignored. Each batch item within the list can specify these parameters instead.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/data-sources/transform_rewrap#batch_input DataVaultTransformRewrap#batch_input}

---

##### `decode_transformation`<sup>Optional</sup> <a name="decode_transformation" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.Initializer.parameter.decodeTransformation"></a>

- *Type:* str

The FPE transformation to use to decode the value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/data-sources/transform_rewrap#decode_transformation DataVaultTransformRewrap#decode_transformation}

---

##### `decode_tweak`<sup>Optional</sup> <a name="decode_tweak" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.Initializer.parameter.decodeTweak"></a>

- *Type:* str

The tweak value to use for decoding. Only applicable for FPE transformations with a supplied tweak source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/data-sources/transform_rewrap#decode_tweak DataVaultTransformRewrap#decode_tweak}

---

##### `encoded_value`<sup>Optional</sup> <a name="encoded_value" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.Initializer.parameter.encodedValue"></a>

- *Type:* str

The result of rewrapping a value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/data-sources/transform_rewrap#encoded_value DataVaultTransformRewrap#encoded_value}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/data-sources/transform_rewrap#id DataVaultTransformRewrap#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.Initializer.parameter.namespace"></a>

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/data-sources/transform_rewrap#namespace DataVaultTransformRewrap#namespace}

---

##### `transformation`<sup>Optional</sup> <a name="transformation" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.Initializer.parameter.transformation"></a>

- *Type:* str

The FPE transformation to use for re-encrypting the value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/data-sources/transform_rewrap#transformation DataVaultTransformRewrap#transformation}

---

##### `tweak`<sup>Optional</sup> <a name="tweak" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.Initializer.parameter.tweak"></a>

- *Type:* str

The tweak value to use for re-encrypting. Only applicable for FPE transformations with a supplied tweak source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/data-sources/transform_rewrap#tweak DataVaultTransformRewrap#tweak}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.Initializer.parameter.value"></a>

- *Type:* str

The value to rewrap.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/data-sources/transform_rewrap#value DataVaultTransformRewrap#value}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.resetBatchInput">reset_batch_input</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.resetDecodeTransformation">reset_decode_transformation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.resetDecodeTweak">reset_decode_tweak</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.resetEncodedValue">reset_encoded_value</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.resetNamespace">reset_namespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.resetTransformation">reset_transformation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.resetTweak">reset_tweak</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.resetValue">reset_value</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_batch_input` <a name="reset_batch_input" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.resetBatchInput"></a>

```python
def reset_batch_input() -> None
```

##### `reset_decode_transformation` <a name="reset_decode_transformation" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.resetDecodeTransformation"></a>

```python
def reset_decode_transformation() -> None
```

##### `reset_decode_tweak` <a name="reset_decode_tweak" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.resetDecodeTweak"></a>

```python
def reset_decode_tweak() -> None
```

##### `reset_encoded_value` <a name="reset_encoded_value" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.resetEncodedValue"></a>

```python
def reset_encoded_value() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_namespace` <a name="reset_namespace" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.resetNamespace"></a>

```python
def reset_namespace() -> None
```

##### `reset_transformation` <a name="reset_transformation" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.resetTransformation"></a>

```python
def reset_transformation() -> None
```

##### `reset_tweak` <a name="reset_tweak" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.resetTweak"></a>

```python
def reset_tweak() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.resetValue"></a>

```python
def reset_value() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataVaultTransformRewrap resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.isConstruct"></a>

```python
from cdktn_provider_vault import data_vault_transform_rewrap

dataVaultTransformRewrap.DataVaultTransformRewrap.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.isTerraformElement"></a>

```python
from cdktn_provider_vault import data_vault_transform_rewrap

dataVaultTransformRewrap.DataVaultTransformRewrap.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.isTerraformDataSource"></a>

```python
from cdktn_provider_vault import data_vault_transform_rewrap

dataVaultTransformRewrap.DataVaultTransformRewrap.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.generateConfigForImport"></a>

```python
from cdktn_provider_vault import data_vault_transform_rewrap

dataVaultTransformRewrap.DataVaultTransformRewrap.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataVaultTransformRewrap resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataVaultTransformRewrap to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataVaultTransformRewrap that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/data-sources/transform_rewrap#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataVaultTransformRewrap to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.batchResults">batch_results</a></code> | <code>cdktn.StringMapList</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.batchInputInput">batch_input_input</a></code> | <code>cdktn.IResolvable \| typing.List[typing.Mapping[str]]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.decodeTransformationInput">decode_transformation_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.decodeTweakInput">decode_tweak_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.encodedValueInput">encoded_value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.pathInput">path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.roleNameInput">role_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.transformationInput">transformation_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.tweakInput">tweak_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.batchInput">batch_input</a></code> | <code>cdktn.IResolvable \| typing.List[typing.Mapping[str]]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.decodeTransformation">decode_transformation</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.decodeTweak">decode_tweak</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.encodedValue">encoded_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.roleName">role_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.transformation">transformation</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.tweak">tweak</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.value">value</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `batch_results`<sup>Required</sup> <a name="batch_results" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.batchResults"></a>

```python
batch_results: StringMapList
```

- *Type:* cdktn.StringMapList

---

##### `batch_input_input`<sup>Optional</sup> <a name="batch_input_input" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.batchInputInput"></a>

```python
batch_input_input: IResolvable | typing.List[typing.Mapping[str]]
```

- *Type:* cdktn.IResolvable | typing.List[typing.Mapping[str]]

---

##### `decode_transformation_input`<sup>Optional</sup> <a name="decode_transformation_input" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.decodeTransformationInput"></a>

```python
decode_transformation_input: str
```

- *Type:* str

---

##### `decode_tweak_input`<sup>Optional</sup> <a name="decode_tweak_input" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.decodeTweakInput"></a>

```python
decode_tweak_input: str
```

- *Type:* str

---

##### `encoded_value_input`<sup>Optional</sup> <a name="encoded_value_input" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.encodedValueInput"></a>

```python
encoded_value_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `path_input`<sup>Optional</sup> <a name="path_input" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.pathInput"></a>

```python
path_input: str
```

- *Type:* str

---

##### `role_name_input`<sup>Optional</sup> <a name="role_name_input" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.roleNameInput"></a>

```python
role_name_input: str
```

- *Type:* str

---

##### `transformation_input`<sup>Optional</sup> <a name="transformation_input" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.transformationInput"></a>

```python
transformation_input: str
```

- *Type:* str

---

##### `tweak_input`<sup>Optional</sup> <a name="tweak_input" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.tweakInput"></a>

```python
tweak_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `batch_input`<sup>Required</sup> <a name="batch_input" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.batchInput"></a>

```python
batch_input: IResolvable | typing.List[typing.Mapping[str]]
```

- *Type:* cdktn.IResolvable | typing.List[typing.Mapping[str]]

---

##### `decode_transformation`<sup>Required</sup> <a name="decode_transformation" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.decodeTransformation"></a>

```python
decode_transformation: str
```

- *Type:* str

---

##### `decode_tweak`<sup>Required</sup> <a name="decode_tweak" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.decodeTweak"></a>

```python
decode_tweak: str
```

- *Type:* str

---

##### `encoded_value`<sup>Required</sup> <a name="encoded_value" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.encodedValue"></a>

```python
encoded_value: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `role_name`<sup>Required</sup> <a name="role_name" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.roleName"></a>

```python
role_name: str
```

- *Type:* str

---

##### `transformation`<sup>Required</sup> <a name="transformation" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.transformation"></a>

```python
transformation: str
```

- *Type:* str

---

##### `tweak`<sup>Required</sup> <a name="tweak" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.tweak"></a>

```python
tweak: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.value"></a>

```python
value: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataVaultTransformRewrapConfig <a name="DataVaultTransformRewrapConfig" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrapConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrapConfig.Initializer"></a>

```python
from cdktn_provider_vault import data_vault_transform_rewrap

dataVaultTransformRewrap.DataVaultTransformRewrapConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  path: str,
  role_name: str,
  batch_input: IResolvable | typing.List[typing.Mapping[str]] = None,
  decode_transformation: str = None,
  decode_tweak: str = None,
  encoded_value: str = None,
  id: str = None,
  namespace: str = None,
  transformation: str = None,
  tweak: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrapConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrapConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrapConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrapConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrapConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrapConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrapConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrapConfig.property.path">path</a></code> | <code>str</code> | Path to backend from which to retrieve data. |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrapConfig.property.roleName">role_name</a></code> | <code>str</code> | The name of the role. |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrapConfig.property.batchInput">batch_input</a></code> | <code>cdktn.IResolvable \| typing.List[typing.Mapping[str]]</code> | Specifies a list of items to be re-encoded in a single batch. |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrapConfig.property.decodeTransformation">decode_transformation</a></code> | <code>str</code> | The FPE transformation to use to decode the value. |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrapConfig.property.decodeTweak">decode_tweak</a></code> | <code>str</code> | The tweak value to use for decoding. Only applicable for FPE transformations with a supplied tweak source. |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrapConfig.property.encodedValue">encoded_value</a></code> | <code>str</code> | The result of rewrapping a value. |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrapConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/data-sources/transform_rewrap#id DataVaultTransformRewrap#id}. |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrapConfig.property.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrapConfig.property.transformation">transformation</a></code> | <code>str</code> | The FPE transformation to use for re-encrypting the value. |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrapConfig.property.tweak">tweak</a></code> | <code>str</code> | The tweak value to use for re-encrypting. Only applicable for FPE transformations with a supplied tweak source. |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrapConfig.property.value">value</a></code> | <code>str</code> | The value to rewrap. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrapConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrapConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrapConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrapConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrapConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrapConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrapConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrapConfig.property.path"></a>

```python
path: str
```

- *Type:* str

Path to backend from which to retrieve data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/data-sources/transform_rewrap#path DataVaultTransformRewrap#path}

---

##### `role_name`<sup>Required</sup> <a name="role_name" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrapConfig.property.roleName"></a>

```python
role_name: str
```

- *Type:* str

The name of the role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/data-sources/transform_rewrap#role_name DataVaultTransformRewrap#role_name}

---

##### `batch_input`<sup>Optional</sup> <a name="batch_input" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrapConfig.property.batchInput"></a>

```python
batch_input: IResolvable | typing.List[typing.Mapping[str]]
```

- *Type:* cdktn.IResolvable | typing.List[typing.Mapping[str]]

Specifies a list of items to be re-encoded in a single batch.

If this parameter is set, the top-level parameters 'value', 'transformation', 'decode_transformation', 'tweak', and 'decode_tweak' will be ignored. Each batch item within the list can specify these parameters instead.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/data-sources/transform_rewrap#batch_input DataVaultTransformRewrap#batch_input}

---

##### `decode_transformation`<sup>Optional</sup> <a name="decode_transformation" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrapConfig.property.decodeTransformation"></a>

```python
decode_transformation: str
```

- *Type:* str

The FPE transformation to use to decode the value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/data-sources/transform_rewrap#decode_transformation DataVaultTransformRewrap#decode_transformation}

---

##### `decode_tweak`<sup>Optional</sup> <a name="decode_tweak" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrapConfig.property.decodeTweak"></a>

```python
decode_tweak: str
```

- *Type:* str

The tweak value to use for decoding. Only applicable for FPE transformations with a supplied tweak source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/data-sources/transform_rewrap#decode_tweak DataVaultTransformRewrap#decode_tweak}

---

##### `encoded_value`<sup>Optional</sup> <a name="encoded_value" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrapConfig.property.encodedValue"></a>

```python
encoded_value: str
```

- *Type:* str

The result of rewrapping a value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/data-sources/transform_rewrap#encoded_value DataVaultTransformRewrap#encoded_value}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrapConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/data-sources/transform_rewrap#id DataVaultTransformRewrap#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrapConfig.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/data-sources/transform_rewrap#namespace DataVaultTransformRewrap#namespace}

---

##### `transformation`<sup>Optional</sup> <a name="transformation" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrapConfig.property.transformation"></a>

```python
transformation: str
```

- *Type:* str

The FPE transformation to use for re-encrypting the value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/data-sources/transform_rewrap#transformation DataVaultTransformRewrap#transformation}

---

##### `tweak`<sup>Optional</sup> <a name="tweak" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrapConfig.property.tweak"></a>

```python
tweak: str
```

- *Type:* str

The tweak value to use for re-encrypting. Only applicable for FPE transformations with a supplied tweak source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/data-sources/transform_rewrap#tweak DataVaultTransformRewrap#tweak}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrapConfig.property.value"></a>

```python
value: str
```

- *Type:* str

The value to rewrap.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/data-sources/transform_rewrap#value DataVaultTransformRewrap#value}

---



