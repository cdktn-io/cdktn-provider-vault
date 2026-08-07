# `ephemeralVaultKubernetesServiceAccountToken` Submodule <a name="`ephemeralVaultKubernetesServiceAccountToken` Submodule" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EphemeralVaultKubernetesServiceAccountToken <a name="EphemeralVaultKubernetesServiceAccountToken" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/kubernetes_service_account_token vault_kubernetes_service_account_token}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v18/ephemeralvaultkubernetesserviceaccounttoken"

ephemeralvaultkubernetesserviceaccounttoken.NewEphemeralVaultKubernetesServiceAccountToken(scope Construct, id *string, config EphemeralVaultKubernetesServiceAccountTokenConfig) EphemeralVaultKubernetesServiceAccountToken
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountTokenConfig">EphemeralVaultKubernetesServiceAccountTokenConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountTokenConfig">EphemeralVaultKubernetesServiceAccountTokenConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.toTerraform">ToTerraform</a></code> | Adds this ephemeral resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.resetClusterRoleBinding">ResetClusterRoleBinding</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.resetMountId">ResetMountId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.resetTtl">ResetTtl</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this ephemeral resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetClusterRoleBinding` <a name="ResetClusterRoleBinding" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.resetClusterRoleBinding"></a>

```go
func ResetClusterRoleBinding()
```

##### `ResetMountId` <a name="ResetMountId" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.resetMountId"></a>

```go
func ResetMountId()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.resetNamespace"></a>

```go
func ResetNamespace()
```

##### `ResetTtl` <a name="ResetTtl" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.resetTtl"></a>

```go
func ResetTtl()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.isTerraformEphemeralResource">IsTerraformEphemeralResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v18/ephemeralvaultkubernetesserviceaccounttoken"

ephemeralvaultkubernetesserviceaccounttoken.EphemeralVaultKubernetesServiceAccountToken_IsConstruct(x interface{}) *bool
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

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v18/ephemeralvaultkubernetesserviceaccounttoken"

ephemeralvaultkubernetesserviceaccounttoken.EphemeralVaultKubernetesServiceAccountToken_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformEphemeralResource` <a name="IsTerraformEphemeralResource" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.isTerraformEphemeralResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v18/ephemeralvaultkubernetesserviceaccounttoken"

ephemeralvaultkubernetesserviceaccounttoken.EphemeralVaultKubernetesServiceAccountToken_IsTerraformEphemeralResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.isTerraformEphemeralResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.property.leaseDuration">LeaseDuration</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.property.leaseId">LeaseId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.property.leaseRenewable">LeaseRenewable</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.property.serviceAccountName">ServiceAccountName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.property.serviceAccountNamespace">ServiceAccountNamespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.property.serviceAccountToken">ServiceAccountToken</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.property.backendInput">BackendInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.property.clusterRoleBindingInput">ClusterRoleBindingInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.property.kubernetesNamespaceInput">KubernetesNamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.property.mountIdInput">MountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.property.roleInput">RoleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.property.ttlInput">TtlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.property.backend">Backend</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.property.clusterRoleBinding">ClusterRoleBinding</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.property.kubernetesNamespace">KubernetesNamespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.property.mountId">MountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.property.role">Role</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.property.ttl">Ttl</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.property.lifecycle"></a>

```go
func Lifecycle() TerraformEphemeralResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformEphemeralResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `LeaseDuration`<sup>Required</sup> <a name="LeaseDuration" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.property.leaseDuration"></a>

```go
func LeaseDuration() *f64
```

- *Type:* *f64

---

##### `LeaseId`<sup>Required</sup> <a name="LeaseId" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.property.leaseId"></a>

```go
func LeaseId() *string
```

- *Type:* *string

---

##### `LeaseRenewable`<sup>Required</sup> <a name="LeaseRenewable" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.property.leaseRenewable"></a>

```go
func LeaseRenewable() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `ServiceAccountName`<sup>Required</sup> <a name="ServiceAccountName" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.property.serviceAccountName"></a>

```go
func ServiceAccountName() *string
```

- *Type:* *string

---

##### `ServiceAccountNamespace`<sup>Required</sup> <a name="ServiceAccountNamespace" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.property.serviceAccountNamespace"></a>

```go
func ServiceAccountNamespace() *string
```

- *Type:* *string

---

##### `ServiceAccountToken`<sup>Required</sup> <a name="ServiceAccountToken" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.property.serviceAccountToken"></a>

```go
func ServiceAccountToken() *string
```

- *Type:* *string

---

##### `BackendInput`<sup>Optional</sup> <a name="BackendInput" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.property.backendInput"></a>

```go
func BackendInput() *string
```

- *Type:* *string

---

##### `ClusterRoleBindingInput`<sup>Optional</sup> <a name="ClusterRoleBindingInput" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.property.clusterRoleBindingInput"></a>

```go
func ClusterRoleBindingInput() interface{}
```

- *Type:* interface{}

---

##### `KubernetesNamespaceInput`<sup>Optional</sup> <a name="KubernetesNamespaceInput" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.property.kubernetesNamespaceInput"></a>

```go
func KubernetesNamespaceInput() *string
```

- *Type:* *string

---

##### `MountIdInput`<sup>Optional</sup> <a name="MountIdInput" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.property.mountIdInput"></a>

```go
func MountIdInput() *string
```

- *Type:* *string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `RoleInput`<sup>Optional</sup> <a name="RoleInput" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.property.roleInput"></a>

```go
func RoleInput() *string
```

- *Type:* *string

---

##### `TtlInput`<sup>Optional</sup> <a name="TtlInput" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.property.ttlInput"></a>

```go
func TtlInput() *string
```

- *Type:* *string

---

##### `Backend`<sup>Required</sup> <a name="Backend" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.property.backend"></a>

```go
func Backend() *string
```

- *Type:* *string

---

##### `ClusterRoleBinding`<sup>Required</sup> <a name="ClusterRoleBinding" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.property.clusterRoleBinding"></a>

```go
func ClusterRoleBinding() interface{}
```

- *Type:* interface{}

---

##### `KubernetesNamespace`<sup>Required</sup> <a name="KubernetesNamespace" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.property.kubernetesNamespace"></a>

```go
func KubernetesNamespace() *string
```

- *Type:* *string

---

##### `MountId`<sup>Required</sup> <a name="MountId" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.property.mountId"></a>

```go
func MountId() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.property.role"></a>

```go
func Role() *string
```

- *Type:* *string

---

##### `Ttl`<sup>Required</sup> <a name="Ttl" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.property.ttl"></a>

```go
func Ttl() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### EphemeralVaultKubernetesServiceAccountTokenConfig <a name="EphemeralVaultKubernetesServiceAccountTokenConfig" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountTokenConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountTokenConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v18/ephemeralvaultkubernetesserviceaccounttoken"

&ephemeralvaultkubernetesserviceaccounttoken.EphemeralVaultKubernetesServiceAccountTokenConfig {
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformEphemeralResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Backend: *string,
	KubernetesNamespace: *string,
	Role: *string,
	ClusterRoleBinding: interface{},
	MountId: *string,
	Namespace: *string,
	Ttl: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountTokenConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountTokenConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountTokenConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountTokenConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountTokenConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountTokenConfig.property.backend">Backend</a></code> | <code>*string</code> | The Kubernetes secret backend to generate service account tokens from. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountTokenConfig.property.kubernetesNamespace">KubernetesNamespace</a></code> | <code>*string</code> | The name of the Kubernetes namespace in which to generate the credentials. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountTokenConfig.property.role">Role</a></code> | <code>*string</code> | The name of the role. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountTokenConfig.property.clusterRoleBinding">ClusterRoleBinding</a></code> | <code>interface{}</code> | If true, generate a ClusterRoleBinding to grant permissions across the whole cluster instead of within a namespace. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountTokenConfig.property.mountId">MountId</a></code> | <code>*string</code> | Terraform ID of the mount resource. Used to defer the provisioning of the ephemeral resource till the apply stage. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountTokenConfig.property.namespace">Namespace</a></code> | <code>*string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountTokenConfig.property.ttl">Ttl</a></code> | <code>*string</code> | The TTL of the generated Kubernetes service account token, specified in seconds or as a Go duration format string. |

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountTokenConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountTokenConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountTokenConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountTokenConfig.property.lifecycle"></a>

```go
Lifecycle TerraformEphemeralResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformEphemeralResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountTokenConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Backend`<sup>Required</sup> <a name="Backend" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountTokenConfig.property.backend"></a>

```go
Backend *string
```

- *Type:* *string

The Kubernetes secret backend to generate service account tokens from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/kubernetes_service_account_token#backend EphemeralVaultKubernetesServiceAccountToken#backend}

---

##### `KubernetesNamespace`<sup>Required</sup> <a name="KubernetesNamespace" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountTokenConfig.property.kubernetesNamespace"></a>

```go
KubernetesNamespace *string
```

- *Type:* *string

The name of the Kubernetes namespace in which to generate the credentials.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/kubernetes_service_account_token#kubernetes_namespace EphemeralVaultKubernetesServiceAccountToken#kubernetes_namespace}

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountTokenConfig.property.role"></a>

```go
Role *string
```

- *Type:* *string

The name of the role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/kubernetes_service_account_token#role EphemeralVaultKubernetesServiceAccountToken#role}

---

##### `ClusterRoleBinding`<sup>Optional</sup> <a name="ClusterRoleBinding" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountTokenConfig.property.clusterRoleBinding"></a>

```go
ClusterRoleBinding interface{}
```

- *Type:* interface{}

If true, generate a ClusterRoleBinding to grant permissions across the whole cluster instead of within a namespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/kubernetes_service_account_token#cluster_role_binding EphemeralVaultKubernetesServiceAccountToken#cluster_role_binding}

---

##### `MountId`<sup>Optional</sup> <a name="MountId" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountTokenConfig.property.mountId"></a>

```go
MountId *string
```

- *Type:* *string

Terraform ID of the mount resource. Used to defer the provisioning of the ephemeral resource till the apply stage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/kubernetes_service_account_token#mount_id EphemeralVaultKubernetesServiceAccountToken#mount_id}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountTokenConfig.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/kubernetes_service_account_token#namespace EphemeralVaultKubernetesServiceAccountToken#namespace}

---

##### `Ttl`<sup>Optional</sup> <a name="Ttl" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountTokenConfig.property.ttl"></a>

```go
Ttl *string
```

- *Type:* *string

The TTL of the generated Kubernetes service account token, specified in seconds or as a Go duration format string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/kubernetes_service_account_token#ttl EphemeralVaultKubernetesServiceAccountToken#ttl}

---



