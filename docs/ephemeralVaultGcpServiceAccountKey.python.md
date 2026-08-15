# `ephemeralVaultGcpServiceAccountKey` Submodule <a name="`ephemeralVaultGcpServiceAccountKey` Submodule" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EphemeralVaultGcpServiceAccountKey <a name="EphemeralVaultGcpServiceAccountKey" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/gcp_service_account_key vault_gcp_service_account_key}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.Initializer"></a>

```python
from cdktn_provider_vault import ephemeral_vault_gcp_service_account_key

ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey(
  scope: Construct,
  id: str,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformEphemeralResourceLifecycle = None,
  provider: TerraformProvider = None,
  mount: str,
  key_algorithm: str = None,
  key_type: str = None,
  mount_id: str = None,
  namespace: str = None,
  roleset: str = None,
  static_account: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.Initializer.parameter.mount">mount</a></code> | <code>str</code> | Mount path for the GCP Secret Backend to read credentials from. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.Initializer.parameter.keyAlgorithm">key_algorithm</a></code> | <code>str</code> | Key algorithm used to generate key. Defaults to 2k RSA key. Accepted values: `KEY_ALG_UNSPECIFIED`, `KEY_ALG_RSA_1024`, `KEY_ALG_RSA_2048`. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.Initializer.parameter.keyType">key_type</a></code> | <code>str</code> | Private key type to generate. Defaults to JSON credentials file. Accepted values: `TYPE_UNSPECIFIED`, `TYPE_PKCS12_FILE`, `TYPE_GOOGLE_CREDENTIALS_FILE`. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.Initializer.parameter.mountId">mount_id</a></code> | <code>str</code> | Terraform ID of the mount resource. Used to defer the provisioning of the ephemeral resource till the apply stage. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.Initializer.parameter.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.Initializer.parameter.roleset">roleset</a></code> | <code>str</code> | GCP Secret Roleset to generate credentials for. Mutually exclusive with `static_account`. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.Initializer.parameter.staticAccount">static_account</a></code> | <code>str</code> | GCP Secret Static Account to generate credentials for. Mutually exclusive with `roleset`. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformEphemeralResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.Initializer.parameter.mount"></a>

- *Type:* str

Mount path for the GCP Secret Backend to read credentials from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/gcp_service_account_key#mount EphemeralVaultGcpServiceAccountKey#mount}

---

##### `key_algorithm`<sup>Optional</sup> <a name="key_algorithm" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.Initializer.parameter.keyAlgorithm"></a>

- *Type:* str

Key algorithm used to generate key. Defaults to 2k RSA key. Accepted values: `KEY_ALG_UNSPECIFIED`, `KEY_ALG_RSA_1024`, `KEY_ALG_RSA_2048`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/gcp_service_account_key#key_algorithm EphemeralVaultGcpServiceAccountKey#key_algorithm}

---

##### `key_type`<sup>Optional</sup> <a name="key_type" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.Initializer.parameter.keyType"></a>

- *Type:* str

Private key type to generate. Defaults to JSON credentials file. Accepted values: `TYPE_UNSPECIFIED`, `TYPE_PKCS12_FILE`, `TYPE_GOOGLE_CREDENTIALS_FILE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/gcp_service_account_key#key_type EphemeralVaultGcpServiceAccountKey#key_type}

---

##### `mount_id`<sup>Optional</sup> <a name="mount_id" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.Initializer.parameter.mountId"></a>

- *Type:* str

Terraform ID of the mount resource. Used to defer the provisioning of the ephemeral resource till the apply stage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/gcp_service_account_key#mount_id EphemeralVaultGcpServiceAccountKey#mount_id}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.Initializer.parameter.namespace"></a>

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/gcp_service_account_key#namespace EphemeralVaultGcpServiceAccountKey#namespace}

---

##### `roleset`<sup>Optional</sup> <a name="roleset" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.Initializer.parameter.roleset"></a>

- *Type:* str

GCP Secret Roleset to generate credentials for. Mutually exclusive with `static_account`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/gcp_service_account_key#roleset EphemeralVaultGcpServiceAccountKey#roleset}

---

##### `static_account`<sup>Optional</sup> <a name="static_account" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.Initializer.parameter.staticAccount"></a>

- *Type:* str

GCP Secret Static Account to generate credentials for. Mutually exclusive with `roleset`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/gcp_service_account_key#static_account EphemeralVaultGcpServiceAccountKey#static_account}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.toTerraform">to_terraform</a></code> | Adds this ephemeral resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.resetKeyAlgorithm">reset_key_algorithm</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.resetKeyType">reset_key_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.resetMountId">reset_mount_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.resetNamespace">reset_namespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.resetRoleset">reset_roleset</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.resetStaticAccount">reset_static_account</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this ephemeral resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_key_algorithm` <a name="reset_key_algorithm" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.resetKeyAlgorithm"></a>

```python
def reset_key_algorithm() -> None
```

##### `reset_key_type` <a name="reset_key_type" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.resetKeyType"></a>

```python
def reset_key_type() -> None
```

##### `reset_mount_id` <a name="reset_mount_id" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.resetMountId"></a>

```python
def reset_mount_id() -> None
```

##### `reset_namespace` <a name="reset_namespace" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.resetNamespace"></a>

```python
def reset_namespace() -> None
```

##### `reset_roleset` <a name="reset_roleset" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.resetRoleset"></a>

```python
def reset_roleset() -> None
```

##### `reset_static_account` <a name="reset_static_account" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.resetStaticAccount"></a>

```python
def reset_static_account() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.isTerraformEphemeralResource">is_terraform_ephemeral_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.isConstruct"></a>

```python
from cdktn_provider_vault import ephemeral_vault_gcp_service_account_key

ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.isTerraformElement"></a>

```python
from cdktn_provider_vault import ephemeral_vault_gcp_service_account_key

ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_ephemeral_resource` <a name="is_terraform_ephemeral_resource" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.isTerraformEphemeralResource"></a>

```python
from cdktn_provider_vault import ephemeral_vault_gcp_service_account_key

ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.is_terraform_ephemeral_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.isTerraformEphemeralResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.leaseDuration">lease_duration</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.leaseId">lease_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.leaseRenewable">lease_renewable</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.leaseStartTime">lease_start_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.privateKeyData">private_key_data</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.privateKeyType">private_key_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.serviceAccountEmail">service_account_email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.keyAlgorithmInput">key_algorithm_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.keyTypeInput">key_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.mountIdInput">mount_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.mountInput">mount_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.rolesetInput">roleset_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.staticAccountInput">static_account_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.keyAlgorithm">key_algorithm</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.keyType">key_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.mount">mount</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.mountId">mount_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.roleset">roleset</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.staticAccount">static_account</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.lifecycle"></a>

```python
lifecycle: TerraformEphemeralResourceLifecycle
```

- *Type:* cdktn.TerraformEphemeralResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `lease_duration`<sup>Required</sup> <a name="lease_duration" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.leaseDuration"></a>

```python
lease_duration: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `lease_id`<sup>Required</sup> <a name="lease_id" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.leaseId"></a>

```python
lease_id: str
```

- *Type:* str

---

##### `lease_renewable`<sup>Required</sup> <a name="lease_renewable" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.leaseRenewable"></a>

```python
lease_renewable: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `lease_start_time`<sup>Required</sup> <a name="lease_start_time" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.leaseStartTime"></a>

```python
lease_start_time: str
```

- *Type:* str

---

##### `private_key_data`<sup>Required</sup> <a name="private_key_data" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.privateKeyData"></a>

```python
private_key_data: str
```

- *Type:* str

---

##### `private_key_type`<sup>Required</sup> <a name="private_key_type" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.privateKeyType"></a>

```python
private_key_type: str
```

- *Type:* str

---

##### `service_account_email`<sup>Required</sup> <a name="service_account_email" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.serviceAccountEmail"></a>

```python
service_account_email: str
```

- *Type:* str

---

##### `key_algorithm_input`<sup>Optional</sup> <a name="key_algorithm_input" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.keyAlgorithmInput"></a>

```python
key_algorithm_input: str
```

- *Type:* str

---

##### `key_type_input`<sup>Optional</sup> <a name="key_type_input" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.keyTypeInput"></a>

```python
key_type_input: str
```

- *Type:* str

---

##### `mount_id_input`<sup>Optional</sup> <a name="mount_id_input" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.mountIdInput"></a>

```python
mount_id_input: str
```

- *Type:* str

---

##### `mount_input`<sup>Optional</sup> <a name="mount_input" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.mountInput"></a>

```python
mount_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `roleset_input`<sup>Optional</sup> <a name="roleset_input" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.rolesetInput"></a>

```python
roleset_input: str
```

- *Type:* str

---

##### `static_account_input`<sup>Optional</sup> <a name="static_account_input" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.staticAccountInput"></a>

```python
static_account_input: str
```

- *Type:* str

---

##### `key_algorithm`<sup>Required</sup> <a name="key_algorithm" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.keyAlgorithm"></a>

```python
key_algorithm: str
```

- *Type:* str

---

##### `key_type`<sup>Required</sup> <a name="key_type" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.keyType"></a>

```python
key_type: str
```

- *Type:* str

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.mount"></a>

```python
mount: str
```

- *Type:* str

---

##### `mount_id`<sup>Required</sup> <a name="mount_id" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.mountId"></a>

```python
mount_id: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `roleset`<sup>Required</sup> <a name="roleset" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.roleset"></a>

```python
roleset: str
```

- *Type:* str

---

##### `static_account`<sup>Required</sup> <a name="static_account" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.staticAccount"></a>

```python
static_account: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### EphemeralVaultGcpServiceAccountKeyConfig <a name="EphemeralVaultGcpServiceAccountKeyConfig" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKeyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKeyConfig.Initializer"></a>

```python
from cdktn_provider_vault import ephemeral_vault_gcp_service_account_key

ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKeyConfig(
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformEphemeralResourceLifecycle = None,
  provider: TerraformProvider = None,
  mount: str,
  key_algorithm: str = None,
  key_type: str = None,
  mount_id: str = None,
  namespace: str = None,
  roleset: str = None,
  static_account: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKeyConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKeyConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKeyConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKeyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKeyConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKeyConfig.property.mount">mount</a></code> | <code>str</code> | Mount path for the GCP Secret Backend to read credentials from. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKeyConfig.property.keyAlgorithm">key_algorithm</a></code> | <code>str</code> | Key algorithm used to generate key. Defaults to 2k RSA key. Accepted values: `KEY_ALG_UNSPECIFIED`, `KEY_ALG_RSA_1024`, `KEY_ALG_RSA_2048`. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKeyConfig.property.keyType">key_type</a></code> | <code>str</code> | Private key type to generate. Defaults to JSON credentials file. Accepted values: `TYPE_UNSPECIFIED`, `TYPE_PKCS12_FILE`, `TYPE_GOOGLE_CREDENTIALS_FILE`. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKeyConfig.property.mountId">mount_id</a></code> | <code>str</code> | Terraform ID of the mount resource. Used to defer the provisioning of the ephemeral resource till the apply stage. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKeyConfig.property.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKeyConfig.property.roleset">roleset</a></code> | <code>str</code> | GCP Secret Roleset to generate credentials for. Mutually exclusive with `static_account`. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKeyConfig.property.staticAccount">static_account</a></code> | <code>str</code> | GCP Secret Static Account to generate credentials for. Mutually exclusive with `roleset`. |

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKeyConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKeyConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKeyConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKeyConfig.property.lifecycle"></a>

```python
lifecycle: TerraformEphemeralResourceLifecycle
```

- *Type:* cdktn.TerraformEphemeralResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKeyConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKeyConfig.property.mount"></a>

```python
mount: str
```

- *Type:* str

Mount path for the GCP Secret Backend to read credentials from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/gcp_service_account_key#mount EphemeralVaultGcpServiceAccountKey#mount}

---

##### `key_algorithm`<sup>Optional</sup> <a name="key_algorithm" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKeyConfig.property.keyAlgorithm"></a>

```python
key_algorithm: str
```

- *Type:* str

Key algorithm used to generate key. Defaults to 2k RSA key. Accepted values: `KEY_ALG_UNSPECIFIED`, `KEY_ALG_RSA_1024`, `KEY_ALG_RSA_2048`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/gcp_service_account_key#key_algorithm EphemeralVaultGcpServiceAccountKey#key_algorithm}

---

##### `key_type`<sup>Optional</sup> <a name="key_type" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKeyConfig.property.keyType"></a>

```python
key_type: str
```

- *Type:* str

Private key type to generate. Defaults to JSON credentials file. Accepted values: `TYPE_UNSPECIFIED`, `TYPE_PKCS12_FILE`, `TYPE_GOOGLE_CREDENTIALS_FILE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/gcp_service_account_key#key_type EphemeralVaultGcpServiceAccountKey#key_type}

---

##### `mount_id`<sup>Optional</sup> <a name="mount_id" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKeyConfig.property.mountId"></a>

```python
mount_id: str
```

- *Type:* str

Terraform ID of the mount resource. Used to defer the provisioning of the ephemeral resource till the apply stage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/gcp_service_account_key#mount_id EphemeralVaultGcpServiceAccountKey#mount_id}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKeyConfig.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/gcp_service_account_key#namespace EphemeralVaultGcpServiceAccountKey#namespace}

---

##### `roleset`<sup>Optional</sup> <a name="roleset" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKeyConfig.property.roleset"></a>

```python
roleset: str
```

- *Type:* str

GCP Secret Roleset to generate credentials for. Mutually exclusive with `static_account`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/gcp_service_account_key#roleset EphemeralVaultGcpServiceAccountKey#roleset}

---

##### `static_account`<sup>Optional</sup> <a name="static_account" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKeyConfig.property.staticAccount"></a>

```python
static_account: str
```

- *Type:* str

GCP Secret Static Account to generate credentials for. Mutually exclusive with `roleset`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/gcp_service_account_key#static_account EphemeralVaultGcpServiceAccountKey#static_account}

---



