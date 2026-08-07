# `ephemeralVaultAzureAccessCredentials` Submodule <a name="`ephemeralVaultAzureAccessCredentials` Submodule" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EphemeralVaultAzureAccessCredentials <a name="EphemeralVaultAzureAccessCredentials" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/azure_access_credentials vault_azure_access_credentials}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v18/ephemeralvaultazureaccesscredentials"

ephemeralvaultazureaccesscredentials.NewEphemeralVaultAzureAccessCredentials(scope Construct, id *string, config EphemeralVaultAzureAccessCredentialsConfig) EphemeralVaultAzureAccessCredentials
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentialsConfig">EphemeralVaultAzureAccessCredentialsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentialsConfig">EphemeralVaultAzureAccessCredentialsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.toTerraform">ToTerraform</a></code> | Adds this ephemeral resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.resetEnvironment">ResetEnvironment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.resetMaxCredValidationSeconds">ResetMaxCredValidationSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.resetMountId">ResetMountId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.resetNumSecondsBetweenTests">ResetNumSecondsBetweenTests</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.resetNumSequentialSuccesses">ResetNumSequentialSuccesses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.resetRequestMetadata">ResetRequestMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.resetSubscriptionId">ResetSubscriptionId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.resetTenantId">ResetTenantId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.resetValidateCreds">ResetValidateCreds</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this ephemeral resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetEnvironment` <a name="ResetEnvironment" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.resetEnvironment"></a>

```go
func ResetEnvironment()
```

##### `ResetMaxCredValidationSeconds` <a name="ResetMaxCredValidationSeconds" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.resetMaxCredValidationSeconds"></a>

```go
func ResetMaxCredValidationSeconds()
```

##### `ResetMountId` <a name="ResetMountId" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.resetMountId"></a>

```go
func ResetMountId()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.resetNamespace"></a>

```go
func ResetNamespace()
```

##### `ResetNumSecondsBetweenTests` <a name="ResetNumSecondsBetweenTests" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.resetNumSecondsBetweenTests"></a>

```go
func ResetNumSecondsBetweenTests()
```

##### `ResetNumSequentialSuccesses` <a name="ResetNumSequentialSuccesses" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.resetNumSequentialSuccesses"></a>

```go
func ResetNumSequentialSuccesses()
```

##### `ResetRequestMetadata` <a name="ResetRequestMetadata" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.resetRequestMetadata"></a>

```go
func ResetRequestMetadata()
```

##### `ResetSubscriptionId` <a name="ResetSubscriptionId" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.resetSubscriptionId"></a>

```go
func ResetSubscriptionId()
```

##### `ResetTenantId` <a name="ResetTenantId" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.resetTenantId"></a>

```go
func ResetTenantId()
```

##### `ResetValidateCreds` <a name="ResetValidateCreds" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.resetValidateCreds"></a>

```go
func ResetValidateCreds()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.isTerraformEphemeralResource">IsTerraformEphemeralResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v18/ephemeralvaultazureaccesscredentials"

ephemeralvaultazureaccesscredentials.EphemeralVaultAzureAccessCredentials_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v18/ephemeralvaultazureaccesscredentials"

ephemeralvaultazureaccesscredentials.EphemeralVaultAzureAccessCredentials_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformEphemeralResource` <a name="IsTerraformEphemeralResource" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.isTerraformEphemeralResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v18/ephemeralvaultazureaccesscredentials"

ephemeralvaultazureaccesscredentials.EphemeralVaultAzureAccessCredentials_IsTerraformEphemeralResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.isTerraformEphemeralResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.clientId">ClientId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.clientSecret">ClientSecret</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.leaseDuration">LeaseDuration</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.leaseId">LeaseId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.leaseRenewable">LeaseRenewable</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.leaseStartTime">LeaseStartTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.metadata">Metadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.backendInput">BackendInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.environmentInput">EnvironmentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.maxCredValidationSecondsInput">MaxCredValidationSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.mountIdInput">MountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.numSecondsBetweenTestsInput">NumSecondsBetweenTestsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.numSequentialSuccessesInput">NumSequentialSuccessesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.requestMetadataInput">RequestMetadataInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.roleInput">RoleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.subscriptionIdInput">SubscriptionIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.tenantIdInput">TenantIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.validateCredsInput">ValidateCredsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.backend">Backend</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.environment">Environment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.maxCredValidationSeconds">MaxCredValidationSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.mountId">MountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.numSecondsBetweenTests">NumSecondsBetweenTests</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.numSequentialSuccesses">NumSequentialSuccesses</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.requestMetadata">RequestMetadata</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.role">Role</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.subscriptionId">SubscriptionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.tenantId">TenantId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.validateCreds">ValidateCreds</a></code> | <code>interface{}</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.lifecycle"></a>

```go
func Lifecycle() TerraformEphemeralResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformEphemeralResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.clientId"></a>

```go
func ClientId() *string
```

- *Type:* *string

---

##### `ClientSecret`<sup>Required</sup> <a name="ClientSecret" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.clientSecret"></a>

```go
func ClientSecret() *string
```

- *Type:* *string

---

##### `LeaseDuration`<sup>Required</sup> <a name="LeaseDuration" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.leaseDuration"></a>

```go
func LeaseDuration() *f64
```

- *Type:* *f64

---

##### `LeaseId`<sup>Required</sup> <a name="LeaseId" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.leaseId"></a>

```go
func LeaseId() *string
```

- *Type:* *string

---

##### `LeaseRenewable`<sup>Required</sup> <a name="LeaseRenewable" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.leaseRenewable"></a>

```go
func LeaseRenewable() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `LeaseStartTime`<sup>Required</sup> <a name="LeaseStartTime" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.leaseStartTime"></a>

```go
func LeaseStartTime() *string
```

- *Type:* *string

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.metadata"></a>

```go
func Metadata() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `BackendInput`<sup>Optional</sup> <a name="BackendInput" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.backendInput"></a>

```go
func BackendInput() *string
```

- *Type:* *string

---

##### `EnvironmentInput`<sup>Optional</sup> <a name="EnvironmentInput" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.environmentInput"></a>

```go
func EnvironmentInput() *string
```

- *Type:* *string

---

##### `MaxCredValidationSecondsInput`<sup>Optional</sup> <a name="MaxCredValidationSecondsInput" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.maxCredValidationSecondsInput"></a>

```go
func MaxCredValidationSecondsInput() *f64
```

- *Type:* *f64

---

##### `MountIdInput`<sup>Optional</sup> <a name="MountIdInput" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.mountIdInput"></a>

```go
func MountIdInput() *string
```

- *Type:* *string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `NumSecondsBetweenTestsInput`<sup>Optional</sup> <a name="NumSecondsBetweenTestsInput" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.numSecondsBetweenTestsInput"></a>

```go
func NumSecondsBetweenTestsInput() *f64
```

- *Type:* *f64

---

##### `NumSequentialSuccessesInput`<sup>Optional</sup> <a name="NumSequentialSuccessesInput" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.numSequentialSuccessesInput"></a>

```go
func NumSequentialSuccessesInput() *f64
```

- *Type:* *f64

---

##### `RequestMetadataInput`<sup>Optional</sup> <a name="RequestMetadataInput" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.requestMetadataInput"></a>

```go
func RequestMetadataInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `RoleInput`<sup>Optional</sup> <a name="RoleInput" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.roleInput"></a>

```go
func RoleInput() *string
```

- *Type:* *string

---

##### `SubscriptionIdInput`<sup>Optional</sup> <a name="SubscriptionIdInput" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.subscriptionIdInput"></a>

```go
func SubscriptionIdInput() *string
```

- *Type:* *string

---

##### `TenantIdInput`<sup>Optional</sup> <a name="TenantIdInput" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.tenantIdInput"></a>

```go
func TenantIdInput() *string
```

- *Type:* *string

---

##### `ValidateCredsInput`<sup>Optional</sup> <a name="ValidateCredsInput" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.validateCredsInput"></a>

```go
func ValidateCredsInput() interface{}
```

- *Type:* interface{}

---

##### `Backend`<sup>Required</sup> <a name="Backend" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.backend"></a>

```go
func Backend() *string
```

- *Type:* *string

---

##### `Environment`<sup>Required</sup> <a name="Environment" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.environment"></a>

```go
func Environment() *string
```

- *Type:* *string

---

##### `MaxCredValidationSeconds`<sup>Required</sup> <a name="MaxCredValidationSeconds" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.maxCredValidationSeconds"></a>

```go
func MaxCredValidationSeconds() *f64
```

- *Type:* *f64

---

##### `MountId`<sup>Required</sup> <a name="MountId" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.mountId"></a>

```go
func MountId() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `NumSecondsBetweenTests`<sup>Required</sup> <a name="NumSecondsBetweenTests" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.numSecondsBetweenTests"></a>

```go
func NumSecondsBetweenTests() *f64
```

- *Type:* *f64

---

##### `NumSequentialSuccesses`<sup>Required</sup> <a name="NumSequentialSuccesses" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.numSequentialSuccesses"></a>

```go
func NumSequentialSuccesses() *f64
```

- *Type:* *f64

---

##### `RequestMetadata`<sup>Required</sup> <a name="RequestMetadata" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.requestMetadata"></a>

```go
func RequestMetadata() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.role"></a>

```go
func Role() *string
```

- *Type:* *string

---

##### `SubscriptionId`<sup>Required</sup> <a name="SubscriptionId" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.subscriptionId"></a>

```go
func SubscriptionId() *string
```

- *Type:* *string

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.tenantId"></a>

```go
func TenantId() *string
```

- *Type:* *string

---

##### `ValidateCreds`<sup>Required</sup> <a name="ValidateCreds" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.validateCreds"></a>

```go
func ValidateCreds() interface{}
```

- *Type:* interface{}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### EphemeralVaultAzureAccessCredentialsConfig <a name="EphemeralVaultAzureAccessCredentialsConfig" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentialsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentialsConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v18/ephemeralvaultazureaccesscredentials"

&ephemeralvaultazureaccesscredentials.EphemeralVaultAzureAccessCredentialsConfig {
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformEphemeralResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Backend: *string,
	Role: *string,
	Environment: *string,
	MaxCredValidationSeconds: *f64,
	MountId: *string,
	Namespace: *string,
	NumSecondsBetweenTests: *f64,
	NumSequentialSuccesses: *f64,
	RequestMetadata: *map[string]*string,
	SubscriptionId: *string,
	TenantId: *string,
	ValidateCreds: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentialsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentialsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentialsConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentialsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentialsConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentialsConfig.property.backend">Backend</a></code> | <code>*string</code> | Azure Secret Backend to read credentials from. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentialsConfig.property.role">Role</a></code> | <code>*string</code> | Azure Secret Role to read credentials from. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentialsConfig.property.environment">Environment</a></code> | <code>*string</code> | The Azure environment to use during credential validation. Defaults to the Azure Public Cloud. Some possible values: AzurePublicCloud, AzureUSGovernmentCloud. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentialsConfig.property.maxCredValidationSeconds">MaxCredValidationSeconds</a></code> | <code>*f64</code> | If 'validate_creds' is true, the number of seconds after which to give up validating credentials. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentialsConfig.property.mountId">MountId</a></code> | <code>*string</code> | Terraform ID of the mount resource. Used to defer the provisioning of the ephemeral resource till the apply stage. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentialsConfig.property.namespace">Namespace</a></code> | <code>*string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentialsConfig.property.numSecondsBetweenTests">NumSecondsBetweenTests</a></code> | <code>*f64</code> | If 'validate_creds' is true, the number of seconds to wait between each test of generated credentials. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentialsConfig.property.numSequentialSuccesses">NumSequentialSuccesses</a></code> | <code>*f64</code> | If 'validate_creds' is true, the number of sequential successes required to validate generated credentials. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentialsConfig.property.requestMetadata">RequestMetadata</a></code> | <code>*map[string]*string</code> | Input metadata to send with the request to Vault. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentialsConfig.property.subscriptionId">SubscriptionId</a></code> | <code>*string</code> | The subscription ID to use during credential validation. Defaults to the subscription ID configured in the Vault backend. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentialsConfig.property.tenantId">TenantId</a></code> | <code>*string</code> | The tenant ID to use during credential validation. Defaults to the tenant ID configured in the Vault backend. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentialsConfig.property.validateCreds">ValidateCreds</a></code> | <code>interface{}</code> | Whether generated credentials should be validated before being returned. |

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentialsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentialsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentialsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentialsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformEphemeralResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformEphemeralResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentialsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Backend`<sup>Required</sup> <a name="Backend" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentialsConfig.property.backend"></a>

```go
Backend *string
```

- *Type:* *string

Azure Secret Backend to read credentials from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/azure_access_credentials#backend EphemeralVaultAzureAccessCredentials#backend}

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentialsConfig.property.role"></a>

```go
Role *string
```

- *Type:* *string

Azure Secret Role to read credentials from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/azure_access_credentials#role EphemeralVaultAzureAccessCredentials#role}

---

##### `Environment`<sup>Optional</sup> <a name="Environment" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentialsConfig.property.environment"></a>

```go
Environment *string
```

- *Type:* *string

The Azure environment to use during credential validation. Defaults to the Azure Public Cloud. Some possible values: AzurePublicCloud, AzureUSGovernmentCloud.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/azure_access_credentials#environment EphemeralVaultAzureAccessCredentials#environment}

---

##### `MaxCredValidationSeconds`<sup>Optional</sup> <a name="MaxCredValidationSeconds" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentialsConfig.property.maxCredValidationSeconds"></a>

```go
MaxCredValidationSeconds *f64
```

- *Type:* *f64

If 'validate_creds' is true, the number of seconds after which to give up validating credentials.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/azure_access_credentials#max_cred_validation_seconds EphemeralVaultAzureAccessCredentials#max_cred_validation_seconds}

---

##### `MountId`<sup>Optional</sup> <a name="MountId" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentialsConfig.property.mountId"></a>

```go
MountId *string
```

- *Type:* *string

Terraform ID of the mount resource. Used to defer the provisioning of the ephemeral resource till the apply stage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/azure_access_credentials#mount_id EphemeralVaultAzureAccessCredentials#mount_id}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentialsConfig.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/azure_access_credentials#namespace EphemeralVaultAzureAccessCredentials#namespace}

---

##### `NumSecondsBetweenTests`<sup>Optional</sup> <a name="NumSecondsBetweenTests" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentialsConfig.property.numSecondsBetweenTests"></a>

```go
NumSecondsBetweenTests *f64
```

- *Type:* *f64

If 'validate_creds' is true, the number of seconds to wait between each test of generated credentials.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/azure_access_credentials#num_seconds_between_tests EphemeralVaultAzureAccessCredentials#num_seconds_between_tests}

---

##### `NumSequentialSuccesses`<sup>Optional</sup> <a name="NumSequentialSuccesses" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentialsConfig.property.numSequentialSuccesses"></a>

```go
NumSequentialSuccesses *f64
```

- *Type:* *f64

If 'validate_creds' is true, the number of sequential successes required to validate generated credentials.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/azure_access_credentials#num_sequential_successes EphemeralVaultAzureAccessCredentials#num_sequential_successes}

---

##### `RequestMetadata`<sup>Optional</sup> <a name="RequestMetadata" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentialsConfig.property.requestMetadata"></a>

```go
RequestMetadata *map[string]*string
```

- *Type:* *map[string]*string

Input metadata to send with the request to Vault.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/azure_access_credentials#request_metadata EphemeralVaultAzureAccessCredentials#request_metadata}

---

##### `SubscriptionId`<sup>Optional</sup> <a name="SubscriptionId" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentialsConfig.property.subscriptionId"></a>

```go
SubscriptionId *string
```

- *Type:* *string

The subscription ID to use during credential validation. Defaults to the subscription ID configured in the Vault backend.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/azure_access_credentials#subscription_id EphemeralVaultAzureAccessCredentials#subscription_id}

---

##### `TenantId`<sup>Optional</sup> <a name="TenantId" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentialsConfig.property.tenantId"></a>

```go
TenantId *string
```

- *Type:* *string

The tenant ID to use during credential validation. Defaults to the tenant ID configured in the Vault backend.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/azure_access_credentials#tenant_id EphemeralVaultAzureAccessCredentials#tenant_id}

---

##### `ValidateCreds`<sup>Optional</sup> <a name="ValidateCreds" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentialsConfig.property.validateCreds"></a>

```go
ValidateCreds interface{}
```

- *Type:* interface{}

Whether generated credentials should be validated before being returned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/azure_access_credentials#validate_creds EphemeralVaultAzureAccessCredentials#validate_creds}

---



