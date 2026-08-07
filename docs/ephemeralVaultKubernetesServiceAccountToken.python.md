# `ephemeralVaultKubernetesServiceAccountToken` Submodule <a name="`ephemeralVaultKubernetesServiceAccountToken` Submodule" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EphemeralVaultKubernetesServiceAccountToken <a name="EphemeralVaultKubernetesServiceAccountToken" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/kubernetes_service_account_token vault_kubernetes_service_account_token}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.Initializer"></a>

```python
from cdktn_provider_vault import ephemeral_vault_kubernetes_service_account_token

ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken(
  scope: Construct,
  id: str,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformEphemeralResourceLifecycle = None,
  provider: TerraformProvider = None,
  backend: str,
  kubernetes_namespace: str,
  role: str,
  cluster_role_binding: bool | IResolvable = None,
  mount_id: str = None,
  namespace: str = None,
  ttl: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.Initializer.parameter.backend">backend</a></code> | <code>str</code> | The Kubernetes secret backend to generate service account tokens from. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.Initializer.parameter.kubernetesNamespace">kubernetes_namespace</a></code> | <code>str</code> | The name of the Kubernetes namespace in which to generate the credentials. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.Initializer.parameter.role">role</a></code> | <code>str</code> | The name of the role. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.Initializer.parameter.clusterRoleBinding">cluster_role_binding</a></code> | <code>bool \| cdktn.IResolvable</code> | If true, generate a ClusterRoleBinding to grant permissions across the whole cluster instead of within a namespace. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.Initializer.parameter.mountId">mount_id</a></code> | <code>str</code> | Terraform ID of the mount resource. Used to defer the provisioning of the ephemeral resource till the apply stage. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.Initializer.parameter.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.Initializer.parameter.ttl">ttl</a></code> | <code>str</code> | The TTL of the generated Kubernetes service account token, specified in seconds or as a Go duration format string. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformEphemeralResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.Initializer.parameter.backend"></a>

- *Type:* str

The Kubernetes secret backend to generate service account tokens from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/kubernetes_service_account_token#backend EphemeralVaultKubernetesServiceAccountToken#backend}

---

##### `kubernetes_namespace`<sup>Required</sup> <a name="kubernetes_namespace" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.Initializer.parameter.kubernetesNamespace"></a>

- *Type:* str

The name of the Kubernetes namespace in which to generate the credentials.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/kubernetes_service_account_token#kubernetes_namespace EphemeralVaultKubernetesServiceAccountToken#kubernetes_namespace}

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.Initializer.parameter.role"></a>

- *Type:* str

The name of the role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/kubernetes_service_account_token#role EphemeralVaultKubernetesServiceAccountToken#role}

---

##### `cluster_role_binding`<sup>Optional</sup> <a name="cluster_role_binding" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.Initializer.parameter.clusterRoleBinding"></a>

- *Type:* bool | cdktn.IResolvable

If true, generate a ClusterRoleBinding to grant permissions across the whole cluster instead of within a namespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/kubernetes_service_account_token#cluster_role_binding EphemeralVaultKubernetesServiceAccountToken#cluster_role_binding}

---

##### `mount_id`<sup>Optional</sup> <a name="mount_id" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.Initializer.parameter.mountId"></a>

- *Type:* str

Terraform ID of the mount resource. Used to defer the provisioning of the ephemeral resource till the apply stage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/kubernetes_service_account_token#mount_id EphemeralVaultKubernetesServiceAccountToken#mount_id}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.Initializer.parameter.namespace"></a>

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/kubernetes_service_account_token#namespace EphemeralVaultKubernetesServiceAccountToken#namespace}

---

##### `ttl`<sup>Optional</sup> <a name="ttl" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.Initializer.parameter.ttl"></a>

- *Type:* str

The TTL of the generated Kubernetes service account token, specified in seconds or as a Go duration format string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/kubernetes_service_account_token#ttl EphemeralVaultKubernetesServiceAccountToken#ttl}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.toTerraform">to_terraform</a></code> | Adds this ephemeral resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.resetClusterRoleBinding">reset_cluster_role_binding</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.resetMountId">reset_mount_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.resetNamespace">reset_namespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.resetTtl">reset_ttl</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this ephemeral resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_cluster_role_binding` <a name="reset_cluster_role_binding" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.resetClusterRoleBinding"></a>

```python
def reset_cluster_role_binding() -> None
```

##### `reset_mount_id` <a name="reset_mount_id" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.resetMountId"></a>

```python
def reset_mount_id() -> None
```

##### `reset_namespace` <a name="reset_namespace" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.resetNamespace"></a>

```python
def reset_namespace() -> None
```

##### `reset_ttl` <a name="reset_ttl" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.resetTtl"></a>

```python
def reset_ttl() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.isTerraformEphemeralResource">is_terraform_ephemeral_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.isConstruct"></a>

```python
from cdktn_provider_vault import ephemeral_vault_kubernetes_service_account_token

ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.isTerraformElement"></a>

```python
from cdktn_provider_vault import ephemeral_vault_kubernetes_service_account_token

ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_ephemeral_resource` <a name="is_terraform_ephemeral_resource" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.isTerraformEphemeralResource"></a>

```python
from cdktn_provider_vault import ephemeral_vault_kubernetes_service_account_token

ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.is_terraform_ephemeral_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.isTerraformEphemeralResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.property.leaseDuration">lease_duration</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.property.leaseId">lease_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.property.leaseRenewable">lease_renewable</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.property.serviceAccountName">service_account_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.property.serviceAccountNamespace">service_account_namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.property.serviceAccountToken">service_account_token</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.property.backendInput">backend_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.property.clusterRoleBindingInput">cluster_role_binding_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.property.kubernetesNamespaceInput">kubernetes_namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.property.mountIdInput">mount_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.property.roleInput">role_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.property.ttlInput">ttl_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.property.backend">backend</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.property.clusterRoleBinding">cluster_role_binding</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.property.kubernetesNamespace">kubernetes_namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.property.mountId">mount_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.property.role">role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.property.ttl">ttl</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.property.lifecycle"></a>

```python
lifecycle: TerraformEphemeralResourceLifecycle
```

- *Type:* cdktn.TerraformEphemeralResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `lease_duration`<sup>Required</sup> <a name="lease_duration" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.property.leaseDuration"></a>

```python
lease_duration: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `lease_id`<sup>Required</sup> <a name="lease_id" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.property.leaseId"></a>

```python
lease_id: str
```

- *Type:* str

---

##### `lease_renewable`<sup>Required</sup> <a name="lease_renewable" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.property.leaseRenewable"></a>

```python
lease_renewable: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `service_account_name`<sup>Required</sup> <a name="service_account_name" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.property.serviceAccountName"></a>

```python
service_account_name: str
```

- *Type:* str

---

##### `service_account_namespace`<sup>Required</sup> <a name="service_account_namespace" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.property.serviceAccountNamespace"></a>

```python
service_account_namespace: str
```

- *Type:* str

---

##### `service_account_token`<sup>Required</sup> <a name="service_account_token" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.property.serviceAccountToken"></a>

```python
service_account_token: str
```

- *Type:* str

---

##### `backend_input`<sup>Optional</sup> <a name="backend_input" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.property.backendInput"></a>

```python
backend_input: str
```

- *Type:* str

---

##### `cluster_role_binding_input`<sup>Optional</sup> <a name="cluster_role_binding_input" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.property.clusterRoleBindingInput"></a>

```python
cluster_role_binding_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `kubernetes_namespace_input`<sup>Optional</sup> <a name="kubernetes_namespace_input" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.property.kubernetesNamespaceInput"></a>

```python
kubernetes_namespace_input: str
```

- *Type:* str

---

##### `mount_id_input`<sup>Optional</sup> <a name="mount_id_input" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.property.mountIdInput"></a>

```python
mount_id_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `role_input`<sup>Optional</sup> <a name="role_input" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.property.roleInput"></a>

```python
role_input: str
```

- *Type:* str

---

##### `ttl_input`<sup>Optional</sup> <a name="ttl_input" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.property.ttlInput"></a>

```python
ttl_input: str
```

- *Type:* str

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.property.backend"></a>

```python
backend: str
```

- *Type:* str

---

##### `cluster_role_binding`<sup>Required</sup> <a name="cluster_role_binding" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.property.clusterRoleBinding"></a>

```python
cluster_role_binding: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `kubernetes_namespace`<sup>Required</sup> <a name="kubernetes_namespace" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.property.kubernetesNamespace"></a>

```python
kubernetes_namespace: str
```

- *Type:* str

---

##### `mount_id`<sup>Required</sup> <a name="mount_id" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.property.mountId"></a>

```python
mount_id: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.property.role"></a>

```python
role: str
```

- *Type:* str

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.property.ttl"></a>

```python
ttl: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### EphemeralVaultKubernetesServiceAccountTokenConfig <a name="EphemeralVaultKubernetesServiceAccountTokenConfig" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountTokenConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountTokenConfig.Initializer"></a>

```python
from cdktn_provider_vault import ephemeral_vault_kubernetes_service_account_token

ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountTokenConfig(
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformEphemeralResourceLifecycle = None,
  provider: TerraformProvider = None,
  backend: str,
  kubernetes_namespace: str,
  role: str,
  cluster_role_binding: bool | IResolvable = None,
  mount_id: str = None,
  namespace: str = None,
  ttl: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountTokenConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountTokenConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountTokenConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountTokenConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountTokenConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountTokenConfig.property.backend">backend</a></code> | <code>str</code> | The Kubernetes secret backend to generate service account tokens from. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountTokenConfig.property.kubernetesNamespace">kubernetes_namespace</a></code> | <code>str</code> | The name of the Kubernetes namespace in which to generate the credentials. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountTokenConfig.property.role">role</a></code> | <code>str</code> | The name of the role. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountTokenConfig.property.clusterRoleBinding">cluster_role_binding</a></code> | <code>bool \| cdktn.IResolvable</code> | If true, generate a ClusterRoleBinding to grant permissions across the whole cluster instead of within a namespace. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountTokenConfig.property.mountId">mount_id</a></code> | <code>str</code> | Terraform ID of the mount resource. Used to defer the provisioning of the ephemeral resource till the apply stage. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountTokenConfig.property.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountTokenConfig.property.ttl">ttl</a></code> | <code>str</code> | The TTL of the generated Kubernetes service account token, specified in seconds or as a Go duration format string. |

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountTokenConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountTokenConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountTokenConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountTokenConfig.property.lifecycle"></a>

```python
lifecycle: TerraformEphemeralResourceLifecycle
```

- *Type:* cdktn.TerraformEphemeralResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountTokenConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountTokenConfig.property.backend"></a>

```python
backend: str
```

- *Type:* str

The Kubernetes secret backend to generate service account tokens from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/kubernetes_service_account_token#backend EphemeralVaultKubernetesServiceAccountToken#backend}

---

##### `kubernetes_namespace`<sup>Required</sup> <a name="kubernetes_namespace" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountTokenConfig.property.kubernetesNamespace"></a>

```python
kubernetes_namespace: str
```

- *Type:* str

The name of the Kubernetes namespace in which to generate the credentials.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/kubernetes_service_account_token#kubernetes_namespace EphemeralVaultKubernetesServiceAccountToken#kubernetes_namespace}

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountTokenConfig.property.role"></a>

```python
role: str
```

- *Type:* str

The name of the role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/kubernetes_service_account_token#role EphemeralVaultKubernetesServiceAccountToken#role}

---

##### `cluster_role_binding`<sup>Optional</sup> <a name="cluster_role_binding" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountTokenConfig.property.clusterRoleBinding"></a>

```python
cluster_role_binding: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

If true, generate a ClusterRoleBinding to grant permissions across the whole cluster instead of within a namespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/kubernetes_service_account_token#cluster_role_binding EphemeralVaultKubernetesServiceAccountToken#cluster_role_binding}

---

##### `mount_id`<sup>Optional</sup> <a name="mount_id" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountTokenConfig.property.mountId"></a>

```python
mount_id: str
```

- *Type:* str

Terraform ID of the mount resource. Used to defer the provisioning of the ephemeral resource till the apply stage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/kubernetes_service_account_token#mount_id EphemeralVaultKubernetesServiceAccountToken#mount_id}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountTokenConfig.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/kubernetes_service_account_token#namespace EphemeralVaultKubernetesServiceAccountToken#namespace}

---

##### `ttl`<sup>Optional</sup> <a name="ttl" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountTokenConfig.property.ttl"></a>

```python
ttl: str
```

- *Type:* str

The TTL of the generated Kubernetes service account token, specified in seconds or as a Go duration format string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/kubernetes_service_account_token#ttl EphemeralVaultKubernetesServiceAccountToken#ttl}

---



