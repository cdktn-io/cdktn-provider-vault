# `ephemeralVaultSpiffeSecretBackendMintjwt` Submodule <a name="`ephemeralVaultSpiffeSecretBackendMintjwt` Submodule" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EphemeralVaultSpiffeSecretBackendMintjwt <a name="EphemeralVaultSpiffeSecretBackendMintjwt" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/spiffe_secret_backend_mintjwt vault_spiffe_secret_backend_mintjwt}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.Initializer"></a>

```python
from cdktn_provider_vault import ephemeral_vault_spiffe_secret_backend_mintjwt

ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt(
  scope: Construct,
  id: str,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformEphemeralResourceLifecycle = None,
  provider: TerraformProvider = None,
  audience: str,
  mount: str,
  name: str,
  mount_id: str = None,
  namespace: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.Initializer.parameter.audience">audience</a></code> | <code>str</code> | The audience claim to use. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.Initializer.parameter.mount">mount</a></code> | <code>str</code> | Mount path for the SPIFFE secrets engine in Vault. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.Initializer.parameter.name">name</a></code> | <code>str</code> | Name of the SPIFFE role. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.Initializer.parameter.mountId">mount_id</a></code> | <code>str</code> | Terraform ID of the mount resource. Used to defer the provisioning of the ephemeral resource till the apply stage. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.Initializer.parameter.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformEphemeralResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `audience`<sup>Required</sup> <a name="audience" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.Initializer.parameter.audience"></a>

- *Type:* str

The audience claim to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/spiffe_secret_backend_mintjwt#audience EphemeralVaultSpiffeSecretBackendMintjwt#audience}

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.Initializer.parameter.mount"></a>

- *Type:* str

Mount path for the SPIFFE secrets engine in Vault.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/spiffe_secret_backend_mintjwt#mount EphemeralVaultSpiffeSecretBackendMintjwt#mount}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.Initializer.parameter.name"></a>

- *Type:* str

Name of the SPIFFE role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/spiffe_secret_backend_mintjwt#name EphemeralVaultSpiffeSecretBackendMintjwt#name}

---

##### `mount_id`<sup>Optional</sup> <a name="mount_id" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.Initializer.parameter.mountId"></a>

- *Type:* str

Terraform ID of the mount resource. Used to defer the provisioning of the ephemeral resource till the apply stage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/spiffe_secret_backend_mintjwt#mount_id EphemeralVaultSpiffeSecretBackendMintjwt#mount_id}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.Initializer.parameter.namespace"></a>

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/spiffe_secret_backend_mintjwt#namespace EphemeralVaultSpiffeSecretBackendMintjwt#namespace}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.toTerraform">to_terraform</a></code> | Adds this ephemeral resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.resetMountId">reset_mount_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.resetNamespace">reset_namespace</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this ephemeral resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_mount_id` <a name="reset_mount_id" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.resetMountId"></a>

```python
def reset_mount_id() -> None
```

##### `reset_namespace` <a name="reset_namespace" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.resetNamespace"></a>

```python
def reset_namespace() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.isTerraformEphemeralResource">is_terraform_ephemeral_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.isConstruct"></a>

```python
from cdktn_provider_vault import ephemeral_vault_spiffe_secret_backend_mintjwt

ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.isTerraformElement"></a>

```python
from cdktn_provider_vault import ephemeral_vault_spiffe_secret_backend_mintjwt

ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_ephemeral_resource` <a name="is_terraform_ephemeral_resource" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.isTerraformEphemeralResource"></a>

```python
from cdktn_provider_vault import ephemeral_vault_spiffe_secret_backend_mintjwt

ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.is_terraform_ephemeral_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.isTerraformEphemeralResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.property.token">token</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.property.audienceInput">audience_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.property.mountIdInput">mount_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.property.mountInput">mount_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.property.audience">audience</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.property.mount">mount</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.property.mountId">mount_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.property.lifecycle"></a>

```python
lifecycle: TerraformEphemeralResourceLifecycle
```

- *Type:* cdktn.TerraformEphemeralResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `token`<sup>Required</sup> <a name="token" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.property.token"></a>

```python
token: str
```

- *Type:* str

---

##### `audience_input`<sup>Optional</sup> <a name="audience_input" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.property.audienceInput"></a>

```python
audience_input: str
```

- *Type:* str

---

##### `mount_id_input`<sup>Optional</sup> <a name="mount_id_input" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.property.mountIdInput"></a>

```python
mount_id_input: str
```

- *Type:* str

---

##### `mount_input`<sup>Optional</sup> <a name="mount_input" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.property.mountInput"></a>

```python
mount_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `audience`<sup>Required</sup> <a name="audience" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.property.audience"></a>

```python
audience: str
```

- *Type:* str

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.property.mount"></a>

```python
mount: str
```

- *Type:* str

---

##### `mount_id`<sup>Required</sup> <a name="mount_id" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.property.mountId"></a>

```python
mount_id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### EphemeralVaultSpiffeSecretBackendMintjwtConfig <a name="EphemeralVaultSpiffeSecretBackendMintjwtConfig" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwtConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwtConfig.Initializer"></a>

```python
from cdktn_provider_vault import ephemeral_vault_spiffe_secret_backend_mintjwt

ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwtConfig(
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformEphemeralResourceLifecycle = None,
  provider: TerraformProvider = None,
  audience: str,
  mount: str,
  name: str,
  mount_id: str = None,
  namespace: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwtConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwtConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwtConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwtConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwtConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwtConfig.property.audience">audience</a></code> | <code>str</code> | The audience claim to use. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwtConfig.property.mount">mount</a></code> | <code>str</code> | Mount path for the SPIFFE secrets engine in Vault. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwtConfig.property.name">name</a></code> | <code>str</code> | Name of the SPIFFE role. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwtConfig.property.mountId">mount_id</a></code> | <code>str</code> | Terraform ID of the mount resource. Used to defer the provisioning of the ephemeral resource till the apply stage. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwtConfig.property.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwtConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwtConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwtConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwtConfig.property.lifecycle"></a>

```python
lifecycle: TerraformEphemeralResourceLifecycle
```

- *Type:* cdktn.TerraformEphemeralResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwtConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `audience`<sup>Required</sup> <a name="audience" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwtConfig.property.audience"></a>

```python
audience: str
```

- *Type:* str

The audience claim to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/spiffe_secret_backend_mintjwt#audience EphemeralVaultSpiffeSecretBackendMintjwt#audience}

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwtConfig.property.mount"></a>

```python
mount: str
```

- *Type:* str

Mount path for the SPIFFE secrets engine in Vault.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/spiffe_secret_backend_mintjwt#mount EphemeralVaultSpiffeSecretBackendMintjwt#mount}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwtConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the SPIFFE role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/spiffe_secret_backend_mintjwt#name EphemeralVaultSpiffeSecretBackendMintjwt#name}

---

##### `mount_id`<sup>Optional</sup> <a name="mount_id" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwtConfig.property.mountId"></a>

```python
mount_id: str
```

- *Type:* str

Terraform ID of the mount resource. Used to defer the provisioning of the ephemeral resource till the apply stage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/spiffe_secret_backend_mintjwt#mount_id EphemeralVaultSpiffeSecretBackendMintjwt#mount_id}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwtConfig.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/spiffe_secret_backend_mintjwt#namespace EphemeralVaultSpiffeSecretBackendMintjwt#namespace}

---



