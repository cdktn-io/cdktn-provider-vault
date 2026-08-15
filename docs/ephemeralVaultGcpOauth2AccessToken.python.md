# `ephemeralVaultGcpOauth2AccessToken` Submodule <a name="`ephemeralVaultGcpOauth2AccessToken` Submodule" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EphemeralVaultGcpOauth2AccessToken <a name="EphemeralVaultGcpOauth2AccessToken" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/gcp_oauth2_access_token vault_gcp_oauth2_access_token}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.Initializer"></a>

```python
from cdktn_provider_vault import ephemeral_vault_gcp_oauth2_access_token

ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken(
  scope: Construct,
  id: str,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformEphemeralResourceLifecycle = None,
  provider: TerraformProvider = None,
  mount: str,
  impersonated_account: str = None,
  max_retries: typing.Union[int, float] = None,
  mount_id: str = None,
  namespace: str = None,
  roleset: str = None,
  static_account: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.Initializer.parameter.mount">mount</a></code> | <code>str</code> | Mount path for the GCP Secret Backend to read credentials from. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.Initializer.parameter.impersonatedAccount">impersonated_account</a></code> | <code>str</code> | GCP Secret Impersonated Account to generate OAuth2 access token for. Mutually exclusive with `roleset` and `static_account`. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.Initializer.parameter.maxRetries">max_retries</a></code> | <code>typing.Union[int, float]</code> | Maximum number of retries when the GCP service account or key is not yet ready. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.Initializer.parameter.mountId">mount_id</a></code> | <code>str</code> | Terraform ID of the mount resource. Used to defer the provisioning of the ephemeral resource till the apply stage. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.Initializer.parameter.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.Initializer.parameter.roleset">roleset</a></code> | <code>str</code> | GCP Secret Roleset to generate OAuth2 access token for. Mutually exclusive with `static_account` and `impersonated_account`. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.Initializer.parameter.staticAccount">static_account</a></code> | <code>str</code> | GCP Secret Static Account to generate OAuth2 access token for. Mutually exclusive with `roleset` and `impersonated_account`. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformEphemeralResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.Initializer.parameter.mount"></a>

- *Type:* str

Mount path for the GCP Secret Backend to read credentials from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/gcp_oauth2_access_token#mount EphemeralVaultGcpOauth2AccessToken#mount}

---

##### `impersonated_account`<sup>Optional</sup> <a name="impersonated_account" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.Initializer.parameter.impersonatedAccount"></a>

- *Type:* str

GCP Secret Impersonated Account to generate OAuth2 access token for. Mutually exclusive with `roleset` and `static_account`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/gcp_oauth2_access_token#impersonated_account EphemeralVaultGcpOauth2AccessToken#impersonated_account}

---

##### `max_retries`<sup>Optional</sup> <a name="max_retries" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.Initializer.parameter.maxRetries"></a>

- *Type:* typing.Union[int, float]

Maximum number of retries when the GCP service account or key is not yet ready.

Each retry waits 1 second. Defaults to 10.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/gcp_oauth2_access_token#max_retries EphemeralVaultGcpOauth2AccessToken#max_retries}

---

##### `mount_id`<sup>Optional</sup> <a name="mount_id" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.Initializer.parameter.mountId"></a>

- *Type:* str

Terraform ID of the mount resource. Used to defer the provisioning of the ephemeral resource till the apply stage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/gcp_oauth2_access_token#mount_id EphemeralVaultGcpOauth2AccessToken#mount_id}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.Initializer.parameter.namespace"></a>

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/gcp_oauth2_access_token#namespace EphemeralVaultGcpOauth2AccessToken#namespace}

---

##### `roleset`<sup>Optional</sup> <a name="roleset" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.Initializer.parameter.roleset"></a>

- *Type:* str

GCP Secret Roleset to generate OAuth2 access token for. Mutually exclusive with `static_account` and `impersonated_account`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/gcp_oauth2_access_token#roleset EphemeralVaultGcpOauth2AccessToken#roleset}

---

##### `static_account`<sup>Optional</sup> <a name="static_account" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.Initializer.parameter.staticAccount"></a>

- *Type:* str

GCP Secret Static Account to generate OAuth2 access token for. Mutually exclusive with `roleset` and `impersonated_account`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/gcp_oauth2_access_token#static_account EphemeralVaultGcpOauth2AccessToken#static_account}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.toTerraform">to_terraform</a></code> | Adds this ephemeral resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.resetImpersonatedAccount">reset_impersonated_account</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.resetMaxRetries">reset_max_retries</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.resetMountId">reset_mount_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.resetNamespace">reset_namespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.resetRoleset">reset_roleset</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.resetStaticAccount">reset_static_account</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this ephemeral resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_impersonated_account` <a name="reset_impersonated_account" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.resetImpersonatedAccount"></a>

```python
def reset_impersonated_account() -> None
```

##### `reset_max_retries` <a name="reset_max_retries" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.resetMaxRetries"></a>

```python
def reset_max_retries() -> None
```

##### `reset_mount_id` <a name="reset_mount_id" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.resetMountId"></a>

```python
def reset_mount_id() -> None
```

##### `reset_namespace` <a name="reset_namespace" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.resetNamespace"></a>

```python
def reset_namespace() -> None
```

##### `reset_roleset` <a name="reset_roleset" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.resetRoleset"></a>

```python
def reset_roleset() -> None
```

##### `reset_static_account` <a name="reset_static_account" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.resetStaticAccount"></a>

```python
def reset_static_account() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.isTerraformEphemeralResource">is_terraform_ephemeral_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.isConstruct"></a>

```python
from cdktn_provider_vault import ephemeral_vault_gcp_oauth2_access_token

ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.isTerraformElement"></a>

```python
from cdktn_provider_vault import ephemeral_vault_gcp_oauth2_access_token

ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_ephemeral_resource` <a name="is_terraform_ephemeral_resource" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.isTerraformEphemeralResource"></a>

```python
from cdktn_provider_vault import ephemeral_vault_gcp_oauth2_access_token

ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.is_terraform_ephemeral_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.isTerraformEphemeralResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.property.leaseDuration">lease_duration</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.property.leaseId">lease_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.property.leaseRenewable">lease_renewable</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.property.leaseStartTime">lease_start_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.property.token">token</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.property.tokenTtl">token_ttl</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.property.impersonatedAccountInput">impersonated_account_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.property.maxRetriesInput">max_retries_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.property.mountIdInput">mount_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.property.mountInput">mount_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.property.rolesetInput">roleset_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.property.staticAccountInput">static_account_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.property.impersonatedAccount">impersonated_account</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.property.maxRetries">max_retries</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.property.mount">mount</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.property.mountId">mount_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.property.roleset">roleset</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.property.staticAccount">static_account</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.property.lifecycle"></a>

```python
lifecycle: TerraformEphemeralResourceLifecycle
```

- *Type:* cdktn.TerraformEphemeralResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `lease_duration`<sup>Required</sup> <a name="lease_duration" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.property.leaseDuration"></a>

```python
lease_duration: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `lease_id`<sup>Required</sup> <a name="lease_id" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.property.leaseId"></a>

```python
lease_id: str
```

- *Type:* str

---

##### `lease_renewable`<sup>Required</sup> <a name="lease_renewable" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.property.leaseRenewable"></a>

```python
lease_renewable: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `lease_start_time`<sup>Required</sup> <a name="lease_start_time" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.property.leaseStartTime"></a>

```python
lease_start_time: str
```

- *Type:* str

---

##### `token`<sup>Required</sup> <a name="token" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.property.token"></a>

```python
token: str
```

- *Type:* str

---

##### `token_ttl`<sup>Required</sup> <a name="token_ttl" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.property.tokenTtl"></a>

```python
token_ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `impersonated_account_input`<sup>Optional</sup> <a name="impersonated_account_input" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.property.impersonatedAccountInput"></a>

```python
impersonated_account_input: str
```

- *Type:* str

---

##### `max_retries_input`<sup>Optional</sup> <a name="max_retries_input" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.property.maxRetriesInput"></a>

```python
max_retries_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `mount_id_input`<sup>Optional</sup> <a name="mount_id_input" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.property.mountIdInput"></a>

```python
mount_id_input: str
```

- *Type:* str

---

##### `mount_input`<sup>Optional</sup> <a name="mount_input" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.property.mountInput"></a>

```python
mount_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `roleset_input`<sup>Optional</sup> <a name="roleset_input" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.property.rolesetInput"></a>

```python
roleset_input: str
```

- *Type:* str

---

##### `static_account_input`<sup>Optional</sup> <a name="static_account_input" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.property.staticAccountInput"></a>

```python
static_account_input: str
```

- *Type:* str

---

##### `impersonated_account`<sup>Required</sup> <a name="impersonated_account" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.property.impersonatedAccount"></a>

```python
impersonated_account: str
```

- *Type:* str

---

##### `max_retries`<sup>Required</sup> <a name="max_retries" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.property.maxRetries"></a>

```python
max_retries: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.property.mount"></a>

```python
mount: str
```

- *Type:* str

---

##### `mount_id`<sup>Required</sup> <a name="mount_id" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.property.mountId"></a>

```python
mount_id: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `roleset`<sup>Required</sup> <a name="roleset" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.property.roleset"></a>

```python
roleset: str
```

- *Type:* str

---

##### `static_account`<sup>Required</sup> <a name="static_account" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.property.staticAccount"></a>

```python
static_account: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### EphemeralVaultGcpOauth2AccessTokenConfig <a name="EphemeralVaultGcpOauth2AccessTokenConfig" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessTokenConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessTokenConfig.Initializer"></a>

```python
from cdktn_provider_vault import ephemeral_vault_gcp_oauth2_access_token

ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessTokenConfig(
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformEphemeralResourceLifecycle = None,
  provider: TerraformProvider = None,
  mount: str,
  impersonated_account: str = None,
  max_retries: typing.Union[int, float] = None,
  mount_id: str = None,
  namespace: str = None,
  roleset: str = None,
  static_account: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessTokenConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessTokenConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessTokenConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessTokenConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessTokenConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessTokenConfig.property.mount">mount</a></code> | <code>str</code> | Mount path for the GCP Secret Backend to read credentials from. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessTokenConfig.property.impersonatedAccount">impersonated_account</a></code> | <code>str</code> | GCP Secret Impersonated Account to generate OAuth2 access token for. Mutually exclusive with `roleset` and `static_account`. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessTokenConfig.property.maxRetries">max_retries</a></code> | <code>typing.Union[int, float]</code> | Maximum number of retries when the GCP service account or key is not yet ready. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessTokenConfig.property.mountId">mount_id</a></code> | <code>str</code> | Terraform ID of the mount resource. Used to defer the provisioning of the ephemeral resource till the apply stage. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessTokenConfig.property.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessTokenConfig.property.roleset">roleset</a></code> | <code>str</code> | GCP Secret Roleset to generate OAuth2 access token for. Mutually exclusive with `static_account` and `impersonated_account`. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessTokenConfig.property.staticAccount">static_account</a></code> | <code>str</code> | GCP Secret Static Account to generate OAuth2 access token for. Mutually exclusive with `roleset` and `impersonated_account`. |

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessTokenConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessTokenConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessTokenConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessTokenConfig.property.lifecycle"></a>

```python
lifecycle: TerraformEphemeralResourceLifecycle
```

- *Type:* cdktn.TerraformEphemeralResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessTokenConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessTokenConfig.property.mount"></a>

```python
mount: str
```

- *Type:* str

Mount path for the GCP Secret Backend to read credentials from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/gcp_oauth2_access_token#mount EphemeralVaultGcpOauth2AccessToken#mount}

---

##### `impersonated_account`<sup>Optional</sup> <a name="impersonated_account" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessTokenConfig.property.impersonatedAccount"></a>

```python
impersonated_account: str
```

- *Type:* str

GCP Secret Impersonated Account to generate OAuth2 access token for. Mutually exclusive with `roleset` and `static_account`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/gcp_oauth2_access_token#impersonated_account EphemeralVaultGcpOauth2AccessToken#impersonated_account}

---

##### `max_retries`<sup>Optional</sup> <a name="max_retries" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessTokenConfig.property.maxRetries"></a>

```python
max_retries: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Maximum number of retries when the GCP service account or key is not yet ready.

Each retry waits 1 second. Defaults to 10.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/gcp_oauth2_access_token#max_retries EphemeralVaultGcpOauth2AccessToken#max_retries}

---

##### `mount_id`<sup>Optional</sup> <a name="mount_id" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessTokenConfig.property.mountId"></a>

```python
mount_id: str
```

- *Type:* str

Terraform ID of the mount resource. Used to defer the provisioning of the ephemeral resource till the apply stage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/gcp_oauth2_access_token#mount_id EphemeralVaultGcpOauth2AccessToken#mount_id}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessTokenConfig.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/gcp_oauth2_access_token#namespace EphemeralVaultGcpOauth2AccessToken#namespace}

---

##### `roleset`<sup>Optional</sup> <a name="roleset" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessTokenConfig.property.roleset"></a>

```python
roleset: str
```

- *Type:* str

GCP Secret Roleset to generate OAuth2 access token for. Mutually exclusive with `static_account` and `impersonated_account`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/gcp_oauth2_access_token#roleset EphemeralVaultGcpOauth2AccessToken#roleset}

---

##### `static_account`<sup>Optional</sup> <a name="static_account" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessTokenConfig.property.staticAccount"></a>

```python
static_account: str
```

- *Type:* str

GCP Secret Static Account to generate OAuth2 access token for. Mutually exclusive with `roleset` and `impersonated_account`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/gcp_oauth2_access_token#static_account EphemeralVaultGcpOauth2AccessToken#static_account}

---



