# `ephemeralVaultAzureAccessToken` Submodule <a name="`ephemeralVaultAzureAccessToken` Submodule" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EphemeralVaultAzureAccessToken <a name="EphemeralVaultAzureAccessToken" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/ephemeral-resources/azure_access_token vault_azure_access_token}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.Initializer"></a>

```python
from cdktn_provider_vault import ephemeral_vault_azure_access_token

ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken(
  scope: Construct,
  id: str,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformEphemeralResourceLifecycle = None,
  provider: TerraformProvider = None,
  mount: str,
  role: str,
  scope: str,
  max_retries: typing.Union[int, float] = None,
  mount_id: str = None,
  namespace: str = None,
  retry_delay: typing.Union[int, float] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.Initializer.parameter.mount">mount</a></code> | <code>str</code> | Mount path for the Azure secret engine in Vault. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.Initializer.parameter.role">role</a></code> | <code>str</code> | Static role name to fetch an access token for. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.Initializer.parameter.scope">scope</a></code> | <code>str</code> | The Azure OAuth2 scope to request the access token for (e.g. "https://graph.microsoft.com/.default"). |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.Initializer.parameter.maxRetries">max_retries</a></code> | <code>typing.Union[int, float]</code> | Maximum number of retries when waiting for the Azure AD credential to propagate. Defaults to 4. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.Initializer.parameter.mountId">mount_id</a></code> | <code>str</code> | Terraform ID of the mount resource. Used to defer the provisioning of the ephemeral resource till the apply stage. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.Initializer.parameter.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.Initializer.parameter.retryDelay">retry_delay</a></code> | <code>typing.Union[int, float]</code> | Number of seconds to wait between propagation retries. Defaults to 4. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformEphemeralResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.Initializer.parameter.mount"></a>

- *Type:* str

Mount path for the Azure secret engine in Vault.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/ephemeral-resources/azure_access_token#mount EphemeralVaultAzureAccessToken#mount}

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.Initializer.parameter.role"></a>

- *Type:* str

Static role name to fetch an access token for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/ephemeral-resources/azure_access_token#role EphemeralVaultAzureAccessToken#role}

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.Initializer.parameter.scope"></a>

- *Type:* str

The Azure OAuth2 scope to request the access token for (e.g. "https://graph.microsoft.com/.default").

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/ephemeral-resources/azure_access_token#scope EphemeralVaultAzureAccessToken#scope}

---

##### `max_retries`<sup>Optional</sup> <a name="max_retries" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.Initializer.parameter.maxRetries"></a>

- *Type:* typing.Union[int, float]

Maximum number of retries when waiting for the Azure AD credential to propagate. Defaults to 4.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/ephemeral-resources/azure_access_token#max_retries EphemeralVaultAzureAccessToken#max_retries}

---

##### `mount_id`<sup>Optional</sup> <a name="mount_id" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.Initializer.parameter.mountId"></a>

- *Type:* str

Terraform ID of the mount resource. Used to defer the provisioning of the ephemeral resource till the apply stage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/ephemeral-resources/azure_access_token#mount_id EphemeralVaultAzureAccessToken#mount_id}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.Initializer.parameter.namespace"></a>

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/ephemeral-resources/azure_access_token#namespace EphemeralVaultAzureAccessToken#namespace}

---

##### `retry_delay`<sup>Optional</sup> <a name="retry_delay" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.Initializer.parameter.retryDelay"></a>

- *Type:* typing.Union[int, float]

Number of seconds to wait between propagation retries. Defaults to 4.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/ephemeral-resources/azure_access_token#retry_delay EphemeralVaultAzureAccessToken#retry_delay}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.toTerraform">to_terraform</a></code> | Adds this ephemeral resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.resetMaxRetries">reset_max_retries</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.resetMountId">reset_mount_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.resetNamespace">reset_namespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.resetRetryDelay">reset_retry_delay</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this ephemeral resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_max_retries` <a name="reset_max_retries" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.resetMaxRetries"></a>

```python
def reset_max_retries() -> None
```

##### `reset_mount_id` <a name="reset_mount_id" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.resetMountId"></a>

```python
def reset_mount_id() -> None
```

##### `reset_namespace` <a name="reset_namespace" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.resetNamespace"></a>

```python
def reset_namespace() -> None
```

##### `reset_retry_delay` <a name="reset_retry_delay" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.resetRetryDelay"></a>

```python
def reset_retry_delay() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.isTerraformEphemeralResource">is_terraform_ephemeral_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.isConstruct"></a>

```python
from cdktn_provider_vault import ephemeral_vault_azure_access_token

ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.isTerraformElement"></a>

```python
from cdktn_provider_vault import ephemeral_vault_azure_access_token

ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_ephemeral_resource` <a name="is_terraform_ephemeral_resource" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.isTerraformEphemeralResource"></a>

```python
from cdktn_provider_vault import ephemeral_vault_azure_access_token

ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.is_terraform_ephemeral_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.isTerraformEphemeralResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.property.accessToken">access_token</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.property.expiresIn">expires_in</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.property.extExpiresIn">ext_expires_in</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.property.tokenType">token_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.property.maxRetriesInput">max_retries_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.property.mountIdInput">mount_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.property.mountInput">mount_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.property.retryDelayInput">retry_delay_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.property.roleInput">role_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.property.scopeInput">scope_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.property.maxRetries">max_retries</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.property.mount">mount</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.property.mountId">mount_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.property.retryDelay">retry_delay</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.property.role">role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.property.scope">scope</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.property.lifecycle"></a>

```python
lifecycle: TerraformEphemeralResourceLifecycle
```

- *Type:* cdktn.TerraformEphemeralResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `access_token`<sup>Required</sup> <a name="access_token" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.property.accessToken"></a>

```python
access_token: str
```

- *Type:* str

---

##### `expires_in`<sup>Required</sup> <a name="expires_in" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.property.expiresIn"></a>

```python
expires_in: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ext_expires_in`<sup>Required</sup> <a name="ext_expires_in" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.property.extExpiresIn"></a>

```python
ext_expires_in: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `token_type`<sup>Required</sup> <a name="token_type" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.property.tokenType"></a>

```python
token_type: str
```

- *Type:* str

---

##### `max_retries_input`<sup>Optional</sup> <a name="max_retries_input" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.property.maxRetriesInput"></a>

```python
max_retries_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `mount_id_input`<sup>Optional</sup> <a name="mount_id_input" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.property.mountIdInput"></a>

```python
mount_id_input: str
```

- *Type:* str

---

##### `mount_input`<sup>Optional</sup> <a name="mount_input" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.property.mountInput"></a>

```python
mount_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `retry_delay_input`<sup>Optional</sup> <a name="retry_delay_input" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.property.retryDelayInput"></a>

```python
retry_delay_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `role_input`<sup>Optional</sup> <a name="role_input" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.property.roleInput"></a>

```python
role_input: str
```

- *Type:* str

---

##### `scope_input`<sup>Optional</sup> <a name="scope_input" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.property.scopeInput"></a>

```python
scope_input: str
```

- *Type:* str

---

##### `max_retries`<sup>Required</sup> <a name="max_retries" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.property.maxRetries"></a>

```python
max_retries: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.property.mount"></a>

```python
mount: str
```

- *Type:* str

---

##### `mount_id`<sup>Required</sup> <a name="mount_id" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.property.mountId"></a>

```python
mount_id: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `retry_delay`<sup>Required</sup> <a name="retry_delay" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.property.retryDelay"></a>

```python
retry_delay: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.property.role"></a>

```python
role: str
```

- *Type:* str

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.property.scope"></a>

```python
scope: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### EphemeralVaultAzureAccessTokenConfig <a name="EphemeralVaultAzureAccessTokenConfig" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessTokenConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessTokenConfig.Initializer"></a>

```python
from cdktn_provider_vault import ephemeral_vault_azure_access_token

ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessTokenConfig(
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformEphemeralResourceLifecycle = None,
  provider: TerraformProvider = None,
  mount: str,
  role: str,
  scope: str,
  max_retries: typing.Union[int, float] = None,
  mount_id: str = None,
  namespace: str = None,
  retry_delay: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessTokenConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessTokenConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessTokenConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessTokenConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessTokenConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessTokenConfig.property.mount">mount</a></code> | <code>str</code> | Mount path for the Azure secret engine in Vault. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessTokenConfig.property.role">role</a></code> | <code>str</code> | Static role name to fetch an access token for. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessTokenConfig.property.scope">scope</a></code> | <code>str</code> | The Azure OAuth2 scope to request the access token for (e.g. "https://graph.microsoft.com/.default"). |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessTokenConfig.property.maxRetries">max_retries</a></code> | <code>typing.Union[int, float]</code> | Maximum number of retries when waiting for the Azure AD credential to propagate. Defaults to 4. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessTokenConfig.property.mountId">mount_id</a></code> | <code>str</code> | Terraform ID of the mount resource. Used to defer the provisioning of the ephemeral resource till the apply stage. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessTokenConfig.property.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessTokenConfig.property.retryDelay">retry_delay</a></code> | <code>typing.Union[int, float]</code> | Number of seconds to wait between propagation retries. Defaults to 4. |

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessTokenConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessTokenConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessTokenConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessTokenConfig.property.lifecycle"></a>

```python
lifecycle: TerraformEphemeralResourceLifecycle
```

- *Type:* cdktn.TerraformEphemeralResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessTokenConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessTokenConfig.property.mount"></a>

```python
mount: str
```

- *Type:* str

Mount path for the Azure secret engine in Vault.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/ephemeral-resources/azure_access_token#mount EphemeralVaultAzureAccessToken#mount}

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessTokenConfig.property.role"></a>

```python
role: str
```

- *Type:* str

Static role name to fetch an access token for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/ephemeral-resources/azure_access_token#role EphemeralVaultAzureAccessToken#role}

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessTokenConfig.property.scope"></a>

```python
scope: str
```

- *Type:* str

The Azure OAuth2 scope to request the access token for (e.g. "https://graph.microsoft.com/.default").

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/ephemeral-resources/azure_access_token#scope EphemeralVaultAzureAccessToken#scope}

---

##### `max_retries`<sup>Optional</sup> <a name="max_retries" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessTokenConfig.property.maxRetries"></a>

```python
max_retries: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Maximum number of retries when waiting for the Azure AD credential to propagate. Defaults to 4.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/ephemeral-resources/azure_access_token#max_retries EphemeralVaultAzureAccessToken#max_retries}

---

##### `mount_id`<sup>Optional</sup> <a name="mount_id" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessTokenConfig.property.mountId"></a>

```python
mount_id: str
```

- *Type:* str

Terraform ID of the mount resource. Used to defer the provisioning of the ephemeral resource till the apply stage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/ephemeral-resources/azure_access_token#mount_id EphemeralVaultAzureAccessToken#mount_id}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessTokenConfig.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/ephemeral-resources/azure_access_token#namespace EphemeralVaultAzureAccessToken#namespace}

---

##### `retry_delay`<sup>Optional</sup> <a name="retry_delay" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessTokenConfig.property.retryDelay"></a>

```python
retry_delay: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Number of seconds to wait between propagation retries. Defaults to 4.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/ephemeral-resources/azure_access_token#retry_delay EphemeralVaultAzureAccessToken#retry_delay}

---



