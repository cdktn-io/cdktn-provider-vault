# `gcpkmsSecretBackendKey` Submodule <a name="`gcpkmsSecretBackendKey` Submodule" id="@cdktn/provider-vault.gcpkmsSecretBackendKey"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GcpkmsSecretBackendKey <a name="GcpkmsSecretBackendKey" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/gcpkms_secret_backend_key vault_gcpkms_secret_backend_key}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.Initializer"></a>

```python
from cdktn_provider_vault import gcpkms_secret_backend_key

gcpkmsSecretBackendKey.GcpkmsSecretBackendKey(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  key_name: str,
  key_ring: str,
  mount: str,
  algorithm: str = None,
  crypto_key: str = None,
  labels: typing.Mapping[str] = None,
  namespace: str = None,
  protection_level: str = None,
  purpose: str = None,
  rotation_period: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.Initializer.parameter.keyName">key_name</a></code> | <code>str</code> | Name of the key. |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.Initializer.parameter.keyRing">key_ring</a></code> | <code>str</code> | GCP KMS key ring resource ID (e.g., 'projects/my-project/locations/us-central1/keyRings/my-ring'). Required. |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.Initializer.parameter.mount">mount</a></code> | <code>str</code> | Path where the GCP KMS secrets engine is mounted. |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.Initializer.parameter.algorithm">algorithm</a></code> | <code>str</code> | Algorithm to use for the key. |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.Initializer.parameter.cryptoKey">crypto_key</a></code> | <code>str</code> | Name of the crypto key to use in GCP KMS. |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Labels to apply to the key. |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.Initializer.parameter.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.Initializer.parameter.protectionLevel">protection_level</a></code> | <code>str</code> | Protection level of the key. Valid values: SOFTWARE, HSM. Defaults to SOFTWARE. |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.Initializer.parameter.purpose">purpose</a></code> | <code>str</code> | Purpose of the key. Valid values: encrypt_decrypt, asymmetric_sign, asymmetric_decrypt. |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.Initializer.parameter.rotationPeriod">rotation_period</a></code> | <code>str</code> | Rotation period for the key as a duration string (e.g., '72h', '2592000s' for 30 days). Can be updated after creation. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `key_name`<sup>Required</sup> <a name="key_name" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.Initializer.parameter.keyName"></a>

- *Type:* str

Name of the key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/gcpkms_secret_backend_key#key_name GcpkmsSecretBackendKey#key_name}

---

##### `key_ring`<sup>Required</sup> <a name="key_ring" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.Initializer.parameter.keyRing"></a>

- *Type:* str

GCP KMS key ring resource ID (e.g., 'projects/my-project/locations/us-central1/keyRings/my-ring'). Required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/gcpkms_secret_backend_key#key_ring GcpkmsSecretBackendKey#key_ring}

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.Initializer.parameter.mount"></a>

- *Type:* str

Path where the GCP KMS secrets engine is mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/gcpkms_secret_backend_key#mount GcpkmsSecretBackendKey#mount}

---

##### `algorithm`<sup>Optional</sup> <a name="algorithm" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.Initializer.parameter.algorithm"></a>

- *Type:* str

Algorithm to use for the key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/gcpkms_secret_backend_key#algorithm GcpkmsSecretBackendKey#algorithm}

---

##### `crypto_key`<sup>Optional</sup> <a name="crypto_key" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.Initializer.parameter.cryptoKey"></a>

- *Type:* str

Name of the crypto key to use in GCP KMS.

If the crypto key does not exist,Vault will try to create it. This defaults to the Vault key name if unspecified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/gcpkms_secret_backend_key#crypto_key GcpkmsSecretBackendKey#crypto_key}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

Labels to apply to the key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/gcpkms_secret_backend_key#labels GcpkmsSecretBackendKey#labels}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.Initializer.parameter.namespace"></a>

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/gcpkms_secret_backend_key#namespace GcpkmsSecretBackendKey#namespace}

---

##### `protection_level`<sup>Optional</sup> <a name="protection_level" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.Initializer.parameter.protectionLevel"></a>

- *Type:* str

Protection level of the key. Valid values: SOFTWARE, HSM. Defaults to SOFTWARE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/gcpkms_secret_backend_key#protection_level GcpkmsSecretBackendKey#protection_level}

---

##### `purpose`<sup>Optional</sup> <a name="purpose" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.Initializer.parameter.purpose"></a>

- *Type:* str

Purpose of the key. Valid values: encrypt_decrypt, asymmetric_sign, asymmetric_decrypt.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/gcpkms_secret_backend_key#purpose GcpkmsSecretBackendKey#purpose}

---

##### `rotation_period`<sup>Optional</sup> <a name="rotation_period" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.Initializer.parameter.rotationPeriod"></a>

- *Type:* str

Rotation period for the key as a duration string (e.g., '72h', '2592000s' for 30 days). Can be updated after creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/gcpkms_secret_backend_key#rotation_period GcpkmsSecretBackendKey#rotation_period}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.resetAlgorithm">reset_algorithm</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.resetCryptoKey">reset_crypto_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.resetNamespace">reset_namespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.resetProtectionLevel">reset_protection_level</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.resetPurpose">reset_purpose</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.resetRotationPeriod">reset_rotation_period</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_algorithm` <a name="reset_algorithm" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.resetAlgorithm"></a>

```python
def reset_algorithm() -> None
```

##### `reset_crypto_key` <a name="reset_crypto_key" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.resetCryptoKey"></a>

```python
def reset_crypto_key() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_namespace` <a name="reset_namespace" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.resetNamespace"></a>

```python
def reset_namespace() -> None
```

##### `reset_protection_level` <a name="reset_protection_level" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.resetProtectionLevel"></a>

```python
def reset_protection_level() -> None
```

##### `reset_purpose` <a name="reset_purpose" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.resetPurpose"></a>

```python
def reset_purpose() -> None
```

##### `reset_rotation_period` <a name="reset_rotation_period" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.resetRotationPeriod"></a>

```python
def reset_rotation_period() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a GcpkmsSecretBackendKey resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.isConstruct"></a>

```python
from cdktn_provider_vault import gcpkms_secret_backend_key

gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.isTerraformElement"></a>

```python
from cdktn_provider_vault import gcpkms_secret_backend_key

gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.isTerraformResource"></a>

```python
from cdktn_provider_vault import gcpkms_secret_backend_key

gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.generateConfigForImport"></a>

```python
from cdktn_provider_vault import gcpkms_secret_backend_key

gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a GcpkmsSecretBackendKey resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GcpkmsSecretBackendKey to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GcpkmsSecretBackendKey that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/gcpkms_secret_backend_key#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GcpkmsSecretBackendKey to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.nextRotationTimeSeconds">next_rotation_time_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.primaryVersion">primary_version</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.rotationScheduleSeconds">rotation_schedule_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.algorithmInput">algorithm_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.cryptoKeyInput">crypto_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.keyNameInput">key_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.keyRingInput">key_ring_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.mountInput">mount_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.protectionLevelInput">protection_level_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.purposeInput">purpose_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.rotationPeriodInput">rotation_period_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.algorithm">algorithm</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.cryptoKey">crypto_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.keyName">key_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.keyRing">key_ring</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.mount">mount</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.protectionLevel">protection_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.purpose">purpose</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.rotationPeriod">rotation_period</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `next_rotation_time_seconds`<sup>Required</sup> <a name="next_rotation_time_seconds" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.nextRotationTimeSeconds"></a>

```python
next_rotation_time_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `primary_version`<sup>Required</sup> <a name="primary_version" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.primaryVersion"></a>

```python
primary_version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `rotation_schedule_seconds`<sup>Required</sup> <a name="rotation_schedule_seconds" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.rotationScheduleSeconds"></a>

```python
rotation_schedule_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `algorithm_input`<sup>Optional</sup> <a name="algorithm_input" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.algorithmInput"></a>

```python
algorithm_input: str
```

- *Type:* str

---

##### `crypto_key_input`<sup>Optional</sup> <a name="crypto_key_input" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.cryptoKeyInput"></a>

```python
crypto_key_input: str
```

- *Type:* str

---

##### `key_name_input`<sup>Optional</sup> <a name="key_name_input" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.keyNameInput"></a>

```python
key_name_input: str
```

- *Type:* str

---

##### `key_ring_input`<sup>Optional</sup> <a name="key_ring_input" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.keyRingInput"></a>

```python
key_ring_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `mount_input`<sup>Optional</sup> <a name="mount_input" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.mountInput"></a>

```python
mount_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `protection_level_input`<sup>Optional</sup> <a name="protection_level_input" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.protectionLevelInput"></a>

```python
protection_level_input: str
```

- *Type:* str

---

##### `purpose_input`<sup>Optional</sup> <a name="purpose_input" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.purposeInput"></a>

```python
purpose_input: str
```

- *Type:* str

---

##### `rotation_period_input`<sup>Optional</sup> <a name="rotation_period_input" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.rotationPeriodInput"></a>

```python
rotation_period_input: str
```

- *Type:* str

---

##### `algorithm`<sup>Required</sup> <a name="algorithm" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.algorithm"></a>

```python
algorithm: str
```

- *Type:* str

---

##### `crypto_key`<sup>Required</sup> <a name="crypto_key" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.cryptoKey"></a>

```python
crypto_key: str
```

- *Type:* str

---

##### `key_name`<sup>Required</sup> <a name="key_name" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.keyName"></a>

```python
key_name: str
```

- *Type:* str

---

##### `key_ring`<sup>Required</sup> <a name="key_ring" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.keyRing"></a>

```python
key_ring: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.mount"></a>

```python
mount: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `protection_level`<sup>Required</sup> <a name="protection_level" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.protectionLevel"></a>

```python
protection_level: str
```

- *Type:* str

---

##### `purpose`<sup>Required</sup> <a name="purpose" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.purpose"></a>

```python
purpose: str
```

- *Type:* str

---

##### `rotation_period`<sup>Required</sup> <a name="rotation_period" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.rotationPeriod"></a>

```python
rotation_period: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GcpkmsSecretBackendKeyConfig <a name="GcpkmsSecretBackendKeyConfig" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKeyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKeyConfig.Initializer"></a>

```python
from cdktn_provider_vault import gcpkms_secret_backend_key

gcpkmsSecretBackendKey.GcpkmsSecretBackendKeyConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  key_name: str,
  key_ring: str,
  mount: str,
  algorithm: str = None,
  crypto_key: str = None,
  labels: typing.Mapping[str] = None,
  namespace: str = None,
  protection_level: str = None,
  purpose: str = None,
  rotation_period: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKeyConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKeyConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKeyConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKeyConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKeyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKeyConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKeyConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKeyConfig.property.keyName">key_name</a></code> | <code>str</code> | Name of the key. |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKeyConfig.property.keyRing">key_ring</a></code> | <code>str</code> | GCP KMS key ring resource ID (e.g., 'projects/my-project/locations/us-central1/keyRings/my-ring'). Required. |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKeyConfig.property.mount">mount</a></code> | <code>str</code> | Path where the GCP KMS secrets engine is mounted. |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKeyConfig.property.algorithm">algorithm</a></code> | <code>str</code> | Algorithm to use for the key. |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKeyConfig.property.cryptoKey">crypto_key</a></code> | <code>str</code> | Name of the crypto key to use in GCP KMS. |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKeyConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Labels to apply to the key. |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKeyConfig.property.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKeyConfig.property.protectionLevel">protection_level</a></code> | <code>str</code> | Protection level of the key. Valid values: SOFTWARE, HSM. Defaults to SOFTWARE. |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKeyConfig.property.purpose">purpose</a></code> | <code>str</code> | Purpose of the key. Valid values: encrypt_decrypt, asymmetric_sign, asymmetric_decrypt. |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKeyConfig.property.rotationPeriod">rotation_period</a></code> | <code>str</code> | Rotation period for the key as a duration string (e.g., '72h', '2592000s' for 30 days). Can be updated after creation. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKeyConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKeyConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKeyConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKeyConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKeyConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKeyConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKeyConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `key_name`<sup>Required</sup> <a name="key_name" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKeyConfig.property.keyName"></a>

```python
key_name: str
```

- *Type:* str

Name of the key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/gcpkms_secret_backend_key#key_name GcpkmsSecretBackendKey#key_name}

---

##### `key_ring`<sup>Required</sup> <a name="key_ring" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKeyConfig.property.keyRing"></a>

```python
key_ring: str
```

- *Type:* str

GCP KMS key ring resource ID (e.g., 'projects/my-project/locations/us-central1/keyRings/my-ring'). Required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/gcpkms_secret_backend_key#key_ring GcpkmsSecretBackendKey#key_ring}

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKeyConfig.property.mount"></a>

```python
mount: str
```

- *Type:* str

Path where the GCP KMS secrets engine is mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/gcpkms_secret_backend_key#mount GcpkmsSecretBackendKey#mount}

---

##### `algorithm`<sup>Optional</sup> <a name="algorithm" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKeyConfig.property.algorithm"></a>

```python
algorithm: str
```

- *Type:* str

Algorithm to use for the key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/gcpkms_secret_backend_key#algorithm GcpkmsSecretBackendKey#algorithm}

---

##### `crypto_key`<sup>Optional</sup> <a name="crypto_key" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKeyConfig.property.cryptoKey"></a>

```python
crypto_key: str
```

- *Type:* str

Name of the crypto key to use in GCP KMS.

If the crypto key does not exist,Vault will try to create it. This defaults to the Vault key name if unspecified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/gcpkms_secret_backend_key#crypto_key GcpkmsSecretBackendKey#crypto_key}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKeyConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Labels to apply to the key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/gcpkms_secret_backend_key#labels GcpkmsSecretBackendKey#labels}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKeyConfig.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/gcpkms_secret_backend_key#namespace GcpkmsSecretBackendKey#namespace}

---

##### `protection_level`<sup>Optional</sup> <a name="protection_level" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKeyConfig.property.protectionLevel"></a>

```python
protection_level: str
```

- *Type:* str

Protection level of the key. Valid values: SOFTWARE, HSM. Defaults to SOFTWARE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/gcpkms_secret_backend_key#protection_level GcpkmsSecretBackendKey#protection_level}

---

##### `purpose`<sup>Optional</sup> <a name="purpose" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKeyConfig.property.purpose"></a>

```python
purpose: str
```

- *Type:* str

Purpose of the key. Valid values: encrypt_decrypt, asymmetric_sign, asymmetric_decrypt.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/gcpkms_secret_backend_key#purpose GcpkmsSecretBackendKey#purpose}

---

##### `rotation_period`<sup>Optional</sup> <a name="rotation_period" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKeyConfig.property.rotationPeriod"></a>

```python
rotation_period: str
```

- *Type:* str

Rotation period for the key as a duration string (e.g., '72h', '2592000s' for 30 days). Can be updated after creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/gcpkms_secret_backend_key#rotation_period GcpkmsSecretBackendKey#rotation_period}

---



