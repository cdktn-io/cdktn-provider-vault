# `mfaTotp` Submodule <a name="`mfaTotp` Submodule" id="@cdktn/provider-vault.mfaTotp"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MfaTotp <a name="MfaTotp" id="@cdktn/provider-vault.mfaTotp.MfaTotp"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/mfa_totp vault_mfa_totp}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.mfaTotp.MfaTotp.Initializer"></a>

```python
from cdktn_provider_vault import mfa_totp

mfaTotp.MfaTotp(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  issuer: str,
  name: str,
  algorithm: str = None,
  digits: typing.Union[int, float] = None,
  id: str = None,
  key_size: typing.Union[int, float] = None,
  max_validation_attempts: typing.Union[int, float] = None,
  namespace: str = None,
  period: typing.Union[int, float] = None,
  qr_size: typing.Union[int, float] = None,
  skew: typing.Union[int, float] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.mfaTotp.MfaTotp.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.mfaTotp.MfaTotp.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.mfaTotp.MfaTotp.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.mfaTotp.MfaTotp.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.mfaTotp.MfaTotp.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.mfaTotp.MfaTotp.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.mfaTotp.MfaTotp.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.mfaTotp.MfaTotp.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.mfaTotp.MfaTotp.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.mfaTotp.MfaTotp.Initializer.parameter.issuer">issuer</a></code> | <code>str</code> | The name of the key's issuing organization. |
| <code><a href="#@cdktn/provider-vault.mfaTotp.MfaTotp.Initializer.parameter.name">name</a></code> | <code>str</code> | Name of the MFA method. |
| <code><a href="#@cdktn/provider-vault.mfaTotp.MfaTotp.Initializer.parameter.algorithm">algorithm</a></code> | <code>str</code> | Specifies the hashing algorithm used to generate the TOTP code. Options include 'SHA1', 'SHA256' and 'SHA512'. |
| <code><a href="#@cdktn/provider-vault.mfaTotp.MfaTotp.Initializer.parameter.digits">digits</a></code> | <code>typing.Union[int, float]</code> | The number of digits in the generated TOTP token. This value can either be 6 or 8. |
| <code><a href="#@cdktn/provider-vault.mfaTotp.MfaTotp.Initializer.parameter.id">id</a></code> | <code>str</code> | ID computed by Vault. |
| <code><a href="#@cdktn/provider-vault.mfaTotp.MfaTotp.Initializer.parameter.keySize">key_size</a></code> | <code>typing.Union[int, float]</code> | Specifies the size in bytes of the generated key. |
| <code><a href="#@cdktn/provider-vault.mfaTotp.MfaTotp.Initializer.parameter.maxValidationAttempts">max_validation_attempts</a></code> | <code>typing.Union[int, float]</code> | The maximum number of consecutive failed validation attempts allowed. |
| <code><a href="#@cdktn/provider-vault.mfaTotp.MfaTotp.Initializer.parameter.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.mfaTotp.MfaTotp.Initializer.parameter.period">period</a></code> | <code>typing.Union[int, float]</code> | The length of time used to generate a counter for the TOTP token calculation. |
| <code><a href="#@cdktn/provider-vault.mfaTotp.MfaTotp.Initializer.parameter.qrSize">qr_size</a></code> | <code>typing.Union[int, float]</code> | The pixel size of the generated square QR code. |
| <code><a href="#@cdktn/provider-vault.mfaTotp.MfaTotp.Initializer.parameter.skew">skew</a></code> | <code>typing.Union[int, float]</code> | The number of delay periods that are allowed when validating a TOTP token. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.mfaTotp.MfaTotp.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.mfaTotp.MfaTotp.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.mfaTotp.MfaTotp.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.mfaTotp.MfaTotp.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-vault.mfaTotp.MfaTotp.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-vault.mfaTotp.MfaTotp.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.mfaTotp.MfaTotp.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.mfaTotp.MfaTotp.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.mfaTotp.MfaTotp.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="@cdktn/provider-vault.mfaTotp.MfaTotp.Initializer.parameter.issuer"></a>

- *Type:* str

The name of the key's issuing organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/mfa_totp#issuer MfaTotp#issuer}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-vault.mfaTotp.MfaTotp.Initializer.parameter.name"></a>

- *Type:* str

Name of the MFA method.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/mfa_totp#name MfaTotp#name}

---

##### `algorithm`<sup>Optional</sup> <a name="algorithm" id="@cdktn/provider-vault.mfaTotp.MfaTotp.Initializer.parameter.algorithm"></a>

- *Type:* str

Specifies the hashing algorithm used to generate the TOTP code. Options include 'SHA1', 'SHA256' and 'SHA512'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/mfa_totp#algorithm MfaTotp#algorithm}

---

##### `digits`<sup>Optional</sup> <a name="digits" id="@cdktn/provider-vault.mfaTotp.MfaTotp.Initializer.parameter.digits"></a>

- *Type:* typing.Union[int, float]

The number of digits in the generated TOTP token. This value can either be 6 or 8.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/mfa_totp#digits MfaTotp#digits}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-vault.mfaTotp.MfaTotp.Initializer.parameter.id"></a>

- *Type:* str

ID computed by Vault.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/mfa_totp#id MfaTotp#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `key_size`<sup>Optional</sup> <a name="key_size" id="@cdktn/provider-vault.mfaTotp.MfaTotp.Initializer.parameter.keySize"></a>

- *Type:* typing.Union[int, float]

Specifies the size in bytes of the generated key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/mfa_totp#key_size MfaTotp#key_size}

---

##### `max_validation_attempts`<sup>Optional</sup> <a name="max_validation_attempts" id="@cdktn/provider-vault.mfaTotp.MfaTotp.Initializer.parameter.maxValidationAttempts"></a>

- *Type:* typing.Union[int, float]

The maximum number of consecutive failed validation attempts allowed.

Must be a positive integer. Vault defaults this value to 5 if not provided or if set to 0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/mfa_totp#max_validation_attempts MfaTotp#max_validation_attempts}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.mfaTotp.MfaTotp.Initializer.parameter.namespace"></a>

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/mfa_totp#namespace MfaTotp#namespace}

---

##### `period`<sup>Optional</sup> <a name="period" id="@cdktn/provider-vault.mfaTotp.MfaTotp.Initializer.parameter.period"></a>

- *Type:* typing.Union[int, float]

The length of time used to generate a counter for the TOTP token calculation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/mfa_totp#period MfaTotp#period}

---

##### `qr_size`<sup>Optional</sup> <a name="qr_size" id="@cdktn/provider-vault.mfaTotp.MfaTotp.Initializer.parameter.qrSize"></a>

- *Type:* typing.Union[int, float]

The pixel size of the generated square QR code.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/mfa_totp#qr_size MfaTotp#qr_size}

---

##### `skew`<sup>Optional</sup> <a name="skew" id="@cdktn/provider-vault.mfaTotp.MfaTotp.Initializer.parameter.skew"></a>

- *Type:* typing.Union[int, float]

The number of delay periods that are allowed when validating a TOTP token.

This value can either be 0 or 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/mfa_totp#skew MfaTotp#skew}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.mfaTotp.MfaTotp.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.mfaTotp.MfaTotp.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.mfaTotp.MfaTotp.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.mfaTotp.MfaTotp.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.mfaTotp.MfaTotp.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.mfaTotp.MfaTotp.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.mfaTotp.MfaTotp.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.mfaTotp.MfaTotp.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.mfaTotp.MfaTotp.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-vault.mfaTotp.MfaTotp.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.mfaTotp.MfaTotp.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.mfaTotp.MfaTotp.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.mfaTotp.MfaTotp.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.mfaTotp.MfaTotp.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.mfaTotp.MfaTotp.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.mfaTotp.MfaTotp.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.mfaTotp.MfaTotp.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.mfaTotp.MfaTotp.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.mfaTotp.MfaTotp.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.mfaTotp.MfaTotp.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.mfaTotp.MfaTotp.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.mfaTotp.MfaTotp.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-vault.mfaTotp.MfaTotp.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-vault.mfaTotp.MfaTotp.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-vault.mfaTotp.MfaTotp.resetAlgorithm">reset_algorithm</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.mfaTotp.MfaTotp.resetDigits">reset_digits</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.mfaTotp.MfaTotp.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.mfaTotp.MfaTotp.resetKeySize">reset_key_size</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.mfaTotp.MfaTotp.resetMaxValidationAttempts">reset_max_validation_attempts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.mfaTotp.MfaTotp.resetNamespace">reset_namespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.mfaTotp.MfaTotp.resetPeriod">reset_period</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.mfaTotp.MfaTotp.resetQrSize">reset_qr_size</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.mfaTotp.MfaTotp.resetSkew">reset_skew</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-vault.mfaTotp.MfaTotp.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-vault.mfaTotp.MfaTotp.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-vault.mfaTotp.MfaTotp.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-vault.mfaTotp.MfaTotp.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.mfaTotp.MfaTotp.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-vault.mfaTotp.MfaTotp.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-vault.mfaTotp.MfaTotp.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-vault.mfaTotp.MfaTotp.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-vault.mfaTotp.MfaTotp.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-vault.mfaTotp.MfaTotp.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-vault.mfaTotp.MfaTotp.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-vault.mfaTotp.MfaTotp.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-vault.mfaTotp.MfaTotp.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-vault.mfaTotp.MfaTotp.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-vault.mfaTotp.MfaTotp.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.mfaTotp.MfaTotp.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-vault.mfaTotp.MfaTotp.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.mfaTotp.MfaTotp.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-vault.mfaTotp.MfaTotp.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.mfaTotp.MfaTotp.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-vault.mfaTotp.MfaTotp.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.mfaTotp.MfaTotp.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-vault.mfaTotp.MfaTotp.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.mfaTotp.MfaTotp.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-vault.mfaTotp.MfaTotp.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.mfaTotp.MfaTotp.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-vault.mfaTotp.MfaTotp.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.mfaTotp.MfaTotp.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-vault.mfaTotp.MfaTotp.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.mfaTotp.MfaTotp.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-vault.mfaTotp.MfaTotp.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.mfaTotp.MfaTotp.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-vault.mfaTotp.MfaTotp.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-vault.mfaTotp.MfaTotp.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.mfaTotp.MfaTotp.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.mfaTotp.MfaTotp.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-vault.mfaTotp.MfaTotp.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.mfaTotp.MfaTotp.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-vault.mfaTotp.MfaTotp.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.mfaTotp.MfaTotp.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-vault.mfaTotp.MfaTotp.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-vault.mfaTotp.MfaTotp.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-vault.mfaTotp.MfaTotp.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-vault.mfaTotp.MfaTotp.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.mfaTotp.MfaTotp.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_algorithm` <a name="reset_algorithm" id="@cdktn/provider-vault.mfaTotp.MfaTotp.resetAlgorithm"></a>

```python
def reset_algorithm() -> None
```

##### `reset_digits` <a name="reset_digits" id="@cdktn/provider-vault.mfaTotp.MfaTotp.resetDigits"></a>

```python
def reset_digits() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-vault.mfaTotp.MfaTotp.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_key_size` <a name="reset_key_size" id="@cdktn/provider-vault.mfaTotp.MfaTotp.resetKeySize"></a>

```python
def reset_key_size() -> None
```

##### `reset_max_validation_attempts` <a name="reset_max_validation_attempts" id="@cdktn/provider-vault.mfaTotp.MfaTotp.resetMaxValidationAttempts"></a>

```python
def reset_max_validation_attempts() -> None
```

##### `reset_namespace` <a name="reset_namespace" id="@cdktn/provider-vault.mfaTotp.MfaTotp.resetNamespace"></a>

```python
def reset_namespace() -> None
```

##### `reset_period` <a name="reset_period" id="@cdktn/provider-vault.mfaTotp.MfaTotp.resetPeriod"></a>

```python
def reset_period() -> None
```

##### `reset_qr_size` <a name="reset_qr_size" id="@cdktn/provider-vault.mfaTotp.MfaTotp.resetQrSize"></a>

```python
def reset_qr_size() -> None
```

##### `reset_skew` <a name="reset_skew" id="@cdktn/provider-vault.mfaTotp.MfaTotp.resetSkew"></a>

```python
def reset_skew() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.mfaTotp.MfaTotp.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.mfaTotp.MfaTotp.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.mfaTotp.MfaTotp.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.mfaTotp.MfaTotp.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a MfaTotp resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-vault.mfaTotp.MfaTotp.isConstruct"></a>

```python
from cdktn_provider_vault import mfa_totp

mfaTotp.MfaTotp.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.mfaTotp.MfaTotp.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-vault.mfaTotp.MfaTotp.isTerraformElement"></a>

```python
from cdktn_provider_vault import mfa_totp

mfaTotp.MfaTotp.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.mfaTotp.MfaTotp.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-vault.mfaTotp.MfaTotp.isTerraformResource"></a>

```python
from cdktn_provider_vault import mfa_totp

mfaTotp.MfaTotp.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.mfaTotp.MfaTotp.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-vault.mfaTotp.MfaTotp.generateConfigForImport"></a>

```python
from cdktn_provider_vault import mfa_totp

mfaTotp.MfaTotp.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a MfaTotp resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.mfaTotp.MfaTotp.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-vault.mfaTotp.MfaTotp.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the MfaTotp to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-vault.mfaTotp.MfaTotp.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing MfaTotp that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/mfa_totp#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.mfaTotp.MfaTotp.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the MfaTotp to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.mfaTotp.MfaTotp.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.mfaTotp.MfaTotp.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.mfaTotp.MfaTotp.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.mfaTotp.MfaTotp.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.mfaTotp.MfaTotp.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.mfaTotp.MfaTotp.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.mfaTotp.MfaTotp.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.mfaTotp.MfaTotp.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.mfaTotp.MfaTotp.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.mfaTotp.MfaTotp.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.mfaTotp.MfaTotp.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.mfaTotp.MfaTotp.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.mfaTotp.MfaTotp.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.mfaTotp.MfaTotp.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.mfaTotp.MfaTotp.property.algorithmInput">algorithm_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.mfaTotp.MfaTotp.property.digitsInput">digits_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.mfaTotp.MfaTotp.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.mfaTotp.MfaTotp.property.issuerInput">issuer_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.mfaTotp.MfaTotp.property.keySizeInput">key_size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.mfaTotp.MfaTotp.property.maxValidationAttemptsInput">max_validation_attempts_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.mfaTotp.MfaTotp.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.mfaTotp.MfaTotp.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.mfaTotp.MfaTotp.property.periodInput">period_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.mfaTotp.MfaTotp.property.qrSizeInput">qr_size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.mfaTotp.MfaTotp.property.skewInput">skew_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.mfaTotp.MfaTotp.property.algorithm">algorithm</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.mfaTotp.MfaTotp.property.digits">digits</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.mfaTotp.MfaTotp.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.mfaTotp.MfaTotp.property.issuer">issuer</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.mfaTotp.MfaTotp.property.keySize">key_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.mfaTotp.MfaTotp.property.maxValidationAttempts">max_validation_attempts</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.mfaTotp.MfaTotp.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.mfaTotp.MfaTotp.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.mfaTotp.MfaTotp.property.period">period</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.mfaTotp.MfaTotp.property.qrSize">qr_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.mfaTotp.MfaTotp.property.skew">skew</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-vault.mfaTotp.MfaTotp.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-vault.mfaTotp.MfaTotp.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-vault.mfaTotp.MfaTotp.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-vault.mfaTotp.MfaTotp.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-vault.mfaTotp.MfaTotp.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-vault.mfaTotp.MfaTotp.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-vault.mfaTotp.MfaTotp.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.mfaTotp.MfaTotp.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.mfaTotp.MfaTotp.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-vault.mfaTotp.MfaTotp.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-vault.mfaTotp.MfaTotp.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.mfaTotp.MfaTotp.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.mfaTotp.MfaTotp.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.mfaTotp.MfaTotp.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `algorithm_input`<sup>Optional</sup> <a name="algorithm_input" id="@cdktn/provider-vault.mfaTotp.MfaTotp.property.algorithmInput"></a>

```python
algorithm_input: str
```

- *Type:* str

---

##### `digits_input`<sup>Optional</sup> <a name="digits_input" id="@cdktn/provider-vault.mfaTotp.MfaTotp.property.digitsInput"></a>

```python
digits_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-vault.mfaTotp.MfaTotp.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `issuer_input`<sup>Optional</sup> <a name="issuer_input" id="@cdktn/provider-vault.mfaTotp.MfaTotp.property.issuerInput"></a>

```python
issuer_input: str
```

- *Type:* str

---

##### `key_size_input`<sup>Optional</sup> <a name="key_size_input" id="@cdktn/provider-vault.mfaTotp.MfaTotp.property.keySizeInput"></a>

```python
key_size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_validation_attempts_input`<sup>Optional</sup> <a name="max_validation_attempts_input" id="@cdktn/provider-vault.mfaTotp.MfaTotp.property.maxValidationAttemptsInput"></a>

```python
max_validation_attempts_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-vault.mfaTotp.MfaTotp.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktn/provider-vault.mfaTotp.MfaTotp.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `period_input`<sup>Optional</sup> <a name="period_input" id="@cdktn/provider-vault.mfaTotp.MfaTotp.property.periodInput"></a>

```python
period_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `qr_size_input`<sup>Optional</sup> <a name="qr_size_input" id="@cdktn/provider-vault.mfaTotp.MfaTotp.property.qrSizeInput"></a>

```python
qr_size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `skew_input`<sup>Optional</sup> <a name="skew_input" id="@cdktn/provider-vault.mfaTotp.MfaTotp.property.skewInput"></a>

```python
skew_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `algorithm`<sup>Required</sup> <a name="algorithm" id="@cdktn/provider-vault.mfaTotp.MfaTotp.property.algorithm"></a>

```python
algorithm: str
```

- *Type:* str

---

##### `digits`<sup>Required</sup> <a name="digits" id="@cdktn/provider-vault.mfaTotp.MfaTotp.property.digits"></a>

```python
digits: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.mfaTotp.MfaTotp.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="@cdktn/provider-vault.mfaTotp.MfaTotp.property.issuer"></a>

```python
issuer: str
```

- *Type:* str

---

##### `key_size`<sup>Required</sup> <a name="key_size" id="@cdktn/provider-vault.mfaTotp.MfaTotp.property.keySize"></a>

```python
key_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_validation_attempts`<sup>Required</sup> <a name="max_validation_attempts" id="@cdktn/provider-vault.mfaTotp.MfaTotp.property.maxValidationAttempts"></a>

```python
max_validation_attempts: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-vault.mfaTotp.MfaTotp.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-vault.mfaTotp.MfaTotp.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `period`<sup>Required</sup> <a name="period" id="@cdktn/provider-vault.mfaTotp.MfaTotp.property.period"></a>

```python
period: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `qr_size`<sup>Required</sup> <a name="qr_size" id="@cdktn/provider-vault.mfaTotp.MfaTotp.property.qrSize"></a>

```python
qr_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `skew`<sup>Required</sup> <a name="skew" id="@cdktn/provider-vault.mfaTotp.MfaTotp.property.skew"></a>

```python
skew: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.mfaTotp.MfaTotp.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-vault.mfaTotp.MfaTotp.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### MfaTotpConfig <a name="MfaTotpConfig" id="@cdktn/provider-vault.mfaTotp.MfaTotpConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.mfaTotp.MfaTotpConfig.Initializer"></a>

```python
from cdktn_provider_vault import mfa_totp

mfaTotp.MfaTotpConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  issuer: str,
  name: str,
  algorithm: str = None,
  digits: typing.Union[int, float] = None,
  id: str = None,
  key_size: typing.Union[int, float] = None,
  max_validation_attempts: typing.Union[int, float] = None,
  namespace: str = None,
  period: typing.Union[int, float] = None,
  qr_size: typing.Union[int, float] = None,
  skew: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.mfaTotp.MfaTotpConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.mfaTotp.MfaTotpConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.mfaTotp.MfaTotpConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.mfaTotp.MfaTotpConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.mfaTotp.MfaTotpConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.mfaTotp.MfaTotpConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.mfaTotp.MfaTotpConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.mfaTotp.MfaTotpConfig.property.issuer">issuer</a></code> | <code>str</code> | The name of the key's issuing organization. |
| <code><a href="#@cdktn/provider-vault.mfaTotp.MfaTotpConfig.property.name">name</a></code> | <code>str</code> | Name of the MFA method. |
| <code><a href="#@cdktn/provider-vault.mfaTotp.MfaTotpConfig.property.algorithm">algorithm</a></code> | <code>str</code> | Specifies the hashing algorithm used to generate the TOTP code. Options include 'SHA1', 'SHA256' and 'SHA512'. |
| <code><a href="#@cdktn/provider-vault.mfaTotp.MfaTotpConfig.property.digits">digits</a></code> | <code>typing.Union[int, float]</code> | The number of digits in the generated TOTP token. This value can either be 6 or 8. |
| <code><a href="#@cdktn/provider-vault.mfaTotp.MfaTotpConfig.property.id">id</a></code> | <code>str</code> | ID computed by Vault. |
| <code><a href="#@cdktn/provider-vault.mfaTotp.MfaTotpConfig.property.keySize">key_size</a></code> | <code>typing.Union[int, float]</code> | Specifies the size in bytes of the generated key. |
| <code><a href="#@cdktn/provider-vault.mfaTotp.MfaTotpConfig.property.maxValidationAttempts">max_validation_attempts</a></code> | <code>typing.Union[int, float]</code> | The maximum number of consecutive failed validation attempts allowed. |
| <code><a href="#@cdktn/provider-vault.mfaTotp.MfaTotpConfig.property.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.mfaTotp.MfaTotpConfig.property.period">period</a></code> | <code>typing.Union[int, float]</code> | The length of time used to generate a counter for the TOTP token calculation. |
| <code><a href="#@cdktn/provider-vault.mfaTotp.MfaTotpConfig.property.qrSize">qr_size</a></code> | <code>typing.Union[int, float]</code> | The pixel size of the generated square QR code. |
| <code><a href="#@cdktn/provider-vault.mfaTotp.MfaTotpConfig.property.skew">skew</a></code> | <code>typing.Union[int, float]</code> | The number of delay periods that are allowed when validating a TOTP token. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.mfaTotp.MfaTotpConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.mfaTotp.MfaTotpConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-vault.mfaTotp.MfaTotpConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-vault.mfaTotp.MfaTotpConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.mfaTotp.MfaTotpConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.mfaTotp.MfaTotpConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.mfaTotp.MfaTotpConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="@cdktn/provider-vault.mfaTotp.MfaTotpConfig.property.issuer"></a>

```python
issuer: str
```

- *Type:* str

The name of the key's issuing organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/mfa_totp#issuer MfaTotp#issuer}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-vault.mfaTotp.MfaTotpConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the MFA method.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/mfa_totp#name MfaTotp#name}

---

##### `algorithm`<sup>Optional</sup> <a name="algorithm" id="@cdktn/provider-vault.mfaTotp.MfaTotpConfig.property.algorithm"></a>

```python
algorithm: str
```

- *Type:* str

Specifies the hashing algorithm used to generate the TOTP code. Options include 'SHA1', 'SHA256' and 'SHA512'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/mfa_totp#algorithm MfaTotp#algorithm}

---

##### `digits`<sup>Optional</sup> <a name="digits" id="@cdktn/provider-vault.mfaTotp.MfaTotpConfig.property.digits"></a>

```python
digits: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of digits in the generated TOTP token. This value can either be 6 or 8.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/mfa_totp#digits MfaTotp#digits}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-vault.mfaTotp.MfaTotpConfig.property.id"></a>

```python
id: str
```

- *Type:* str

ID computed by Vault.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/mfa_totp#id MfaTotp#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `key_size`<sup>Optional</sup> <a name="key_size" id="@cdktn/provider-vault.mfaTotp.MfaTotpConfig.property.keySize"></a>

```python
key_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Specifies the size in bytes of the generated key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/mfa_totp#key_size MfaTotp#key_size}

---

##### `max_validation_attempts`<sup>Optional</sup> <a name="max_validation_attempts" id="@cdktn/provider-vault.mfaTotp.MfaTotpConfig.property.maxValidationAttempts"></a>

```python
max_validation_attempts: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The maximum number of consecutive failed validation attempts allowed.

Must be a positive integer. Vault defaults this value to 5 if not provided or if set to 0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/mfa_totp#max_validation_attempts MfaTotp#max_validation_attempts}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.mfaTotp.MfaTotpConfig.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/mfa_totp#namespace MfaTotp#namespace}

---

##### `period`<sup>Optional</sup> <a name="period" id="@cdktn/provider-vault.mfaTotp.MfaTotpConfig.property.period"></a>

```python
period: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The length of time used to generate a counter for the TOTP token calculation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/mfa_totp#period MfaTotp#period}

---

##### `qr_size`<sup>Optional</sup> <a name="qr_size" id="@cdktn/provider-vault.mfaTotp.MfaTotpConfig.property.qrSize"></a>

```python
qr_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The pixel size of the generated square QR code.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/mfa_totp#qr_size MfaTotp#qr_size}

---

##### `skew`<sup>Optional</sup> <a name="skew" id="@cdktn/provider-vault.mfaTotp.MfaTotpConfig.property.skew"></a>

```python
skew: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of delay periods that are allowed when validating a TOTP token.

This value can either be 0 or 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/mfa_totp#skew MfaTotp#skew}

---



