# `keymgmtDistributeKey` Submodule <a name="`keymgmtDistributeKey` Submodule" id="@cdktn/provider-vault.keymgmtDistributeKey"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### KeymgmtDistributeKey <a name="KeymgmtDistributeKey" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/keymgmt_distribute_key vault_keymgmt_distribute_key}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.Initializer"></a>

```python
from cdktn_provider_vault import keymgmt_distribute_key

keymgmtDistributeKey.KeymgmtDistributeKey(
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
  kms_name: str,
  mount: str,
  purpose: typing.List[str],
  namespace: str = None,
  protection: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.Initializer.parameter.keyName">key_name</a></code> | <code>str</code> | Specifies the name of the key to distribute to the given KMS provider. |
| <code><a href="#@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.Initializer.parameter.kmsName">kms_name</a></code> | <code>str</code> | Specifies the name of the KMS provider to distribute the given key to. |
| <code><a href="#@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.Initializer.parameter.mount">mount</a></code> | <code>str</code> | Path of the Key Management secrets engine mount. |
| <code><a href="#@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.Initializer.parameter.purpose">purpose</a></code> | <code>typing.List[str]</code> | Specifies the purpose of the key. |
| <code><a href="#@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.Initializer.parameter.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.Initializer.parameter.protection">protection</a></code> | <code>str</code> | Specifies the protection of the key. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `key_name`<sup>Required</sup> <a name="key_name" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.Initializer.parameter.keyName"></a>

- *Type:* str

Specifies the name of the key to distribute to the given KMS provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/keymgmt_distribute_key#key_name KeymgmtDistributeKey#key_name}

---

##### `kms_name`<sup>Required</sup> <a name="kms_name" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.Initializer.parameter.kmsName"></a>

- *Type:* str

Specifies the name of the KMS provider to distribute the given key to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/keymgmt_distribute_key#kms_name KeymgmtDistributeKey#kms_name}

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.Initializer.parameter.mount"></a>

- *Type:* str

Path of the Key Management secrets engine mount.

Must match the `path` of a `vault_mount` resource with `type = "keymgmt"`. Use `vault_mount.keymgmt.path` here.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/keymgmt_distribute_key#mount KeymgmtDistributeKey#mount}

---

##### `purpose`<sup>Required</sup> <a name="purpose" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.Initializer.parameter.purpose"></a>

- *Type:* typing.List[str]

Specifies the purpose of the key.

The purpose defines a set of cryptographic capabilities that the key will have in the KMS provider. A key must have at least one of the supported purposes. The following values are supported : encrypt, decrypt, sign, verify, wrap, unwrap.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/keymgmt_distribute_key#purpose KeymgmtDistributeKey#purpose}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.Initializer.parameter.namespace"></a>

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/keymgmt_distribute_key#namespace KeymgmtDistributeKey#namespace}

---

##### `protection`<sup>Optional</sup> <a name="protection" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.Initializer.parameter.protection"></a>

- *Type:* str

Specifies the protection of the key.

The protection defines where cryptographic operations are performed with the key in the KMS provider. The following values are supported: hsm, software. Defaults to `hsm`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/keymgmt_distribute_key#protection KeymgmtDistributeKey#protection}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.resetNamespace">reset_namespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.resetProtection">reset_protection</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_namespace` <a name="reset_namespace" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.resetNamespace"></a>

```python
def reset_namespace() -> None
```

##### `reset_protection` <a name="reset_protection" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.resetProtection"></a>

```python
def reset_protection() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a KeymgmtDistributeKey resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.isConstruct"></a>

```python
from cdktn_provider_vault import keymgmt_distribute_key

keymgmtDistributeKey.KeymgmtDistributeKey.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.isTerraformElement"></a>

```python
from cdktn_provider_vault import keymgmt_distribute_key

keymgmtDistributeKey.KeymgmtDistributeKey.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.isTerraformResource"></a>

```python
from cdktn_provider_vault import keymgmt_distribute_key

keymgmtDistributeKey.KeymgmtDistributeKey.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.generateConfigForImport"></a>

```python
from cdktn_provider_vault import keymgmt_distribute_key

keymgmtDistributeKey.KeymgmtDistributeKey.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a KeymgmtDistributeKey resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the KeymgmtDistributeKey to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing KeymgmtDistributeKey that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/keymgmt_distribute_key#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the KeymgmtDistributeKey to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.property.versions">versions</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.property.keyNameInput">key_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.property.kmsNameInput">kms_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.property.mountInput">mount_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.property.protectionInput">protection_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.property.purposeInput">purpose_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.property.keyName">key_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.property.kmsName">kms_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.property.mount">mount</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.property.protection">protection</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.property.purpose">purpose</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `versions`<sup>Required</sup> <a name="versions" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.property.versions"></a>

```python
versions: StringMap
```

- *Type:* cdktn.StringMap

---

##### `key_name_input`<sup>Optional</sup> <a name="key_name_input" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.property.keyNameInput"></a>

```python
key_name_input: str
```

- *Type:* str

---

##### `kms_name_input`<sup>Optional</sup> <a name="kms_name_input" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.property.kmsNameInput"></a>

```python
kms_name_input: str
```

- *Type:* str

---

##### `mount_input`<sup>Optional</sup> <a name="mount_input" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.property.mountInput"></a>

```python
mount_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `protection_input`<sup>Optional</sup> <a name="protection_input" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.property.protectionInput"></a>

```python
protection_input: str
```

- *Type:* str

---

##### `purpose_input`<sup>Optional</sup> <a name="purpose_input" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.property.purposeInput"></a>

```python
purpose_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `key_name`<sup>Required</sup> <a name="key_name" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.property.keyName"></a>

```python
key_name: str
```

- *Type:* str

---

##### `kms_name`<sup>Required</sup> <a name="kms_name" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.property.kmsName"></a>

```python
kms_name: str
```

- *Type:* str

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.property.mount"></a>

```python
mount: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `protection`<sup>Required</sup> <a name="protection" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.property.protection"></a>

```python
protection: str
```

- *Type:* str

---

##### `purpose`<sup>Required</sup> <a name="purpose" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.property.purpose"></a>

```python
purpose: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### KeymgmtDistributeKeyConfig <a name="KeymgmtDistributeKeyConfig" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKeyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKeyConfig.Initializer"></a>

```python
from cdktn_provider_vault import keymgmt_distribute_key

keymgmtDistributeKey.KeymgmtDistributeKeyConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  key_name: str,
  kms_name: str,
  mount: str,
  purpose: typing.List[str],
  namespace: str = None,
  protection: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKeyConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKeyConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKeyConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKeyConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKeyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKeyConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKeyConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKeyConfig.property.keyName">key_name</a></code> | <code>str</code> | Specifies the name of the key to distribute to the given KMS provider. |
| <code><a href="#@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKeyConfig.property.kmsName">kms_name</a></code> | <code>str</code> | Specifies the name of the KMS provider to distribute the given key to. |
| <code><a href="#@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKeyConfig.property.mount">mount</a></code> | <code>str</code> | Path of the Key Management secrets engine mount. |
| <code><a href="#@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKeyConfig.property.purpose">purpose</a></code> | <code>typing.List[str]</code> | Specifies the purpose of the key. |
| <code><a href="#@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKeyConfig.property.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKeyConfig.property.protection">protection</a></code> | <code>str</code> | Specifies the protection of the key. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKeyConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKeyConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKeyConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKeyConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKeyConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKeyConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKeyConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `key_name`<sup>Required</sup> <a name="key_name" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKeyConfig.property.keyName"></a>

```python
key_name: str
```

- *Type:* str

Specifies the name of the key to distribute to the given KMS provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/keymgmt_distribute_key#key_name KeymgmtDistributeKey#key_name}

---

##### `kms_name`<sup>Required</sup> <a name="kms_name" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKeyConfig.property.kmsName"></a>

```python
kms_name: str
```

- *Type:* str

Specifies the name of the KMS provider to distribute the given key to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/keymgmt_distribute_key#kms_name KeymgmtDistributeKey#kms_name}

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKeyConfig.property.mount"></a>

```python
mount: str
```

- *Type:* str

Path of the Key Management secrets engine mount.

Must match the `path` of a `vault_mount` resource with `type = "keymgmt"`. Use `vault_mount.keymgmt.path` here.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/keymgmt_distribute_key#mount KeymgmtDistributeKey#mount}

---

##### `purpose`<sup>Required</sup> <a name="purpose" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKeyConfig.property.purpose"></a>

```python
purpose: typing.List[str]
```

- *Type:* typing.List[str]

Specifies the purpose of the key.

The purpose defines a set of cryptographic capabilities that the key will have in the KMS provider. A key must have at least one of the supported purposes. The following values are supported : encrypt, decrypt, sign, verify, wrap, unwrap.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/keymgmt_distribute_key#purpose KeymgmtDistributeKey#purpose}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKeyConfig.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/keymgmt_distribute_key#namespace KeymgmtDistributeKey#namespace}

---

##### `protection`<sup>Optional</sup> <a name="protection" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKeyConfig.property.protection"></a>

```python
protection: str
```

- *Type:* str

Specifies the protection of the key.

The protection defines where cryptographic operations are performed with the key in the KMS provider. The following values are supported: hsm, software. Defaults to `hsm`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/keymgmt_distribute_key#protection KeymgmtDistributeKey#protection}

---



