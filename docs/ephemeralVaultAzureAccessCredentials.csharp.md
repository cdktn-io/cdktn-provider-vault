# `ephemeralVaultAzureAccessCredentials` Submodule <a name="`ephemeralVaultAzureAccessCredentials` Submodule" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EphemeralVaultAzureAccessCredentials <a name="EphemeralVaultAzureAccessCredentials" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/azure_access_credentials vault_azure_access_credentials}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Vault;

new EphemeralVaultAzureAccessCredentials(Construct Scope, string Id, EphemeralVaultAzureAccessCredentialsConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentialsConfig">EphemeralVaultAzureAccessCredentialsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.Initializer.parameter.config"></a>

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

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this ephemeral resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetEnvironment` <a name="ResetEnvironment" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.resetEnvironment"></a>

```csharp
private void ResetEnvironment()
```

##### `ResetMaxCredValidationSeconds` <a name="ResetMaxCredValidationSeconds" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.resetMaxCredValidationSeconds"></a>

```csharp
private void ResetMaxCredValidationSeconds()
```

##### `ResetMountId` <a name="ResetMountId" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.resetMountId"></a>

```csharp
private void ResetMountId()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.resetNamespace"></a>

```csharp
private void ResetNamespace()
```

##### `ResetNumSecondsBetweenTests` <a name="ResetNumSecondsBetweenTests" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.resetNumSecondsBetweenTests"></a>

```csharp
private void ResetNumSecondsBetweenTests()
```

##### `ResetNumSequentialSuccesses` <a name="ResetNumSequentialSuccesses" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.resetNumSequentialSuccesses"></a>

```csharp
private void ResetNumSequentialSuccesses()
```

##### `ResetRequestMetadata` <a name="ResetRequestMetadata" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.resetRequestMetadata"></a>

```csharp
private void ResetRequestMetadata()
```

##### `ResetSubscriptionId` <a name="ResetSubscriptionId" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.resetSubscriptionId"></a>

```csharp
private void ResetSubscriptionId()
```

##### `ResetTenantId` <a name="ResetTenantId" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.resetTenantId"></a>

```csharp
private void ResetTenantId()
```

##### `ResetValidateCreds` <a name="ResetValidateCreds" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.resetValidateCreds"></a>

```csharp
private void ResetValidateCreds()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.isTerraformEphemeralResource">IsTerraformEphemeralResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Vault;

EphemeralVaultAzureAccessCredentials.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Vault;

EphemeralVaultAzureAccessCredentials.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformEphemeralResource` <a name="IsTerraformEphemeralResource" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.isTerraformEphemeralResource"></a>

```csharp
using Io.Cdktn.Providers.Vault;

EphemeralVaultAzureAccessCredentials.IsTerraformEphemeralResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.isTerraformEphemeralResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.clientId">ClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.clientSecret">ClientSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.leaseDuration">LeaseDuration</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.leaseId">LeaseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.leaseRenewable">LeaseRenewable</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.leaseStartTime">LeaseStartTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.metadata">Metadata</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.backendInput">BackendInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.environmentInput">EnvironmentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.maxCredValidationSecondsInput">MaxCredValidationSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.mountIdInput">MountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.numSecondsBetweenTestsInput">NumSecondsBetweenTestsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.numSequentialSuccessesInput">NumSequentialSuccessesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.requestMetadataInput">RequestMetadataInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.roleInput">RoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.subscriptionIdInput">SubscriptionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.tenantIdInput">TenantIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.validateCredsInput">ValidateCredsInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.backend">Backend</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.environment">Environment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.maxCredValidationSeconds">MaxCredValidationSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.mountId">MountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.numSecondsBetweenTests">NumSecondsBetweenTests</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.numSequentialSuccesses">NumSequentialSuccesses</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.requestMetadata">RequestMetadata</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.role">Role</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.subscriptionId">SubscriptionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.tenantId">TenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.validateCreds">ValidateCreds</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.lifecycle"></a>

```csharp
public TerraformEphemeralResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformEphemeralResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.clientId"></a>

```csharp
public string ClientId { get; }
```

- *Type:* string

---

##### `ClientSecret`<sup>Required</sup> <a name="ClientSecret" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.clientSecret"></a>

```csharp
public string ClientSecret { get; }
```

- *Type:* string

---

##### `LeaseDuration`<sup>Required</sup> <a name="LeaseDuration" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.leaseDuration"></a>

```csharp
public double LeaseDuration { get; }
```

- *Type:* double

---

##### `LeaseId`<sup>Required</sup> <a name="LeaseId" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.leaseId"></a>

```csharp
public string LeaseId { get; }
```

- *Type:* string

---

##### `LeaseRenewable`<sup>Required</sup> <a name="LeaseRenewable" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.leaseRenewable"></a>

```csharp
public IResolvable LeaseRenewable { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `LeaseStartTime`<sup>Required</sup> <a name="LeaseStartTime" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.leaseStartTime"></a>

```csharp
public string LeaseStartTime { get; }
```

- *Type:* string

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.metadata"></a>

```csharp
public StringMap Metadata { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `BackendInput`<sup>Optional</sup> <a name="BackendInput" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.backendInput"></a>

```csharp
public string BackendInput { get; }
```

- *Type:* string

---

##### `EnvironmentInput`<sup>Optional</sup> <a name="EnvironmentInput" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.environmentInput"></a>

```csharp
public string EnvironmentInput { get; }
```

- *Type:* string

---

##### `MaxCredValidationSecondsInput`<sup>Optional</sup> <a name="MaxCredValidationSecondsInput" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.maxCredValidationSecondsInput"></a>

```csharp
public double MaxCredValidationSecondsInput { get; }
```

- *Type:* double

---

##### `MountIdInput`<sup>Optional</sup> <a name="MountIdInput" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.mountIdInput"></a>

```csharp
public string MountIdInput { get; }
```

- *Type:* string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `NumSecondsBetweenTestsInput`<sup>Optional</sup> <a name="NumSecondsBetweenTestsInput" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.numSecondsBetweenTestsInput"></a>

```csharp
public double NumSecondsBetweenTestsInput { get; }
```

- *Type:* double

---

##### `NumSequentialSuccessesInput`<sup>Optional</sup> <a name="NumSequentialSuccessesInput" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.numSequentialSuccessesInput"></a>

```csharp
public double NumSequentialSuccessesInput { get; }
```

- *Type:* double

---

##### `RequestMetadataInput`<sup>Optional</sup> <a name="RequestMetadataInput" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.requestMetadataInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> RequestMetadataInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `RoleInput`<sup>Optional</sup> <a name="RoleInput" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.roleInput"></a>

```csharp
public string RoleInput { get; }
```

- *Type:* string

---

##### `SubscriptionIdInput`<sup>Optional</sup> <a name="SubscriptionIdInput" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.subscriptionIdInput"></a>

```csharp
public string SubscriptionIdInput { get; }
```

- *Type:* string

---

##### `TenantIdInput`<sup>Optional</sup> <a name="TenantIdInput" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.tenantIdInput"></a>

```csharp
public string TenantIdInput { get; }
```

- *Type:* string

---

##### `ValidateCredsInput`<sup>Optional</sup> <a name="ValidateCredsInput" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.validateCredsInput"></a>

```csharp
public bool|IResolvable ValidateCredsInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Backend`<sup>Required</sup> <a name="Backend" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.backend"></a>

```csharp
public string Backend { get; }
```

- *Type:* string

---

##### `Environment`<sup>Required</sup> <a name="Environment" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.environment"></a>

```csharp
public string Environment { get; }
```

- *Type:* string

---

##### `MaxCredValidationSeconds`<sup>Required</sup> <a name="MaxCredValidationSeconds" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.maxCredValidationSeconds"></a>

```csharp
public double MaxCredValidationSeconds { get; }
```

- *Type:* double

---

##### `MountId`<sup>Required</sup> <a name="MountId" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.mountId"></a>

```csharp
public string MountId { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `NumSecondsBetweenTests`<sup>Required</sup> <a name="NumSecondsBetweenTests" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.numSecondsBetweenTests"></a>

```csharp
public double NumSecondsBetweenTests { get; }
```

- *Type:* double

---

##### `NumSequentialSuccesses`<sup>Required</sup> <a name="NumSequentialSuccesses" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.numSequentialSuccesses"></a>

```csharp
public double NumSequentialSuccesses { get; }
```

- *Type:* double

---

##### `RequestMetadata`<sup>Required</sup> <a name="RequestMetadata" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.requestMetadata"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> RequestMetadata { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.role"></a>

```csharp
public string Role { get; }
```

- *Type:* string

---

##### `SubscriptionId`<sup>Required</sup> <a name="SubscriptionId" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.subscriptionId"></a>

```csharp
public string SubscriptionId { get; }
```

- *Type:* string

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.tenantId"></a>

```csharp
public string TenantId { get; }
```

- *Type:* string

---

##### `ValidateCreds`<sup>Required</sup> <a name="ValidateCreds" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.validateCreds"></a>

```csharp
public bool|IResolvable ValidateCreds { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### EphemeralVaultAzureAccessCredentialsConfig <a name="EphemeralVaultAzureAccessCredentialsConfig" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentialsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentialsConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Vault;

new EphemeralVaultAzureAccessCredentialsConfig {
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformEphemeralResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    string Backend,
    string Role,
    string Environment = null,
    double MaxCredValidationSeconds = null,
    string MountId = null,
    string Namespace = null,
    double NumSecondsBetweenTests = null,
    double NumSequentialSuccesses = null,
    System.Collections.Generic.IDictionary<string, string> RequestMetadata = null,
    string SubscriptionId = null,
    string TenantId = null,
    bool|IResolvable ValidateCreds = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentialsConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentialsConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentialsConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentialsConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentialsConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentialsConfig.property.backend">Backend</a></code> | <code>string</code> | Azure Secret Backend to read credentials from. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentialsConfig.property.role">Role</a></code> | <code>string</code> | Azure Secret Role to read credentials from. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentialsConfig.property.environment">Environment</a></code> | <code>string</code> | The Azure environment to use during credential validation. Defaults to the Azure Public Cloud. Some possible values: AzurePublicCloud, AzureUSGovernmentCloud. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentialsConfig.property.maxCredValidationSeconds">MaxCredValidationSeconds</a></code> | <code>double</code> | If 'validate_creds' is true, the number of seconds after which to give up validating credentials. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentialsConfig.property.mountId">MountId</a></code> | <code>string</code> | Terraform ID of the mount resource. Used to defer the provisioning of the ephemeral resource till the apply stage. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentialsConfig.property.namespace">Namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentialsConfig.property.numSecondsBetweenTests">NumSecondsBetweenTests</a></code> | <code>double</code> | If 'validate_creds' is true, the number of seconds to wait between each test of generated credentials. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentialsConfig.property.numSequentialSuccesses">NumSequentialSuccesses</a></code> | <code>double</code> | If 'validate_creds' is true, the number of sequential successes required to validate generated credentials. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentialsConfig.property.requestMetadata">RequestMetadata</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Input metadata to send with the request to Vault. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentialsConfig.property.subscriptionId">SubscriptionId</a></code> | <code>string</code> | The subscription ID to use during credential validation. Defaults to the subscription ID configured in the Vault backend. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentialsConfig.property.tenantId">TenantId</a></code> | <code>string</code> | The tenant ID to use during credential validation. Defaults to the tenant ID configured in the Vault backend. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentialsConfig.property.validateCreds">ValidateCreds</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether generated credentials should be validated before being returned. |

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentialsConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentialsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentialsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentialsConfig.property.lifecycle"></a>

```csharp
public TerraformEphemeralResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformEphemeralResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentialsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Backend`<sup>Required</sup> <a name="Backend" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentialsConfig.property.backend"></a>

```csharp
public string Backend { get; set; }
```

- *Type:* string

Azure Secret Backend to read credentials from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/azure_access_credentials#backend EphemeralVaultAzureAccessCredentials#backend}

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentialsConfig.property.role"></a>

```csharp
public string Role { get; set; }
```

- *Type:* string

Azure Secret Role to read credentials from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/azure_access_credentials#role EphemeralVaultAzureAccessCredentials#role}

---

##### `Environment`<sup>Optional</sup> <a name="Environment" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentialsConfig.property.environment"></a>

```csharp
public string Environment { get; set; }
```

- *Type:* string

The Azure environment to use during credential validation. Defaults to the Azure Public Cloud. Some possible values: AzurePublicCloud, AzureUSGovernmentCloud.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/azure_access_credentials#environment EphemeralVaultAzureAccessCredentials#environment}

---

##### `MaxCredValidationSeconds`<sup>Optional</sup> <a name="MaxCredValidationSeconds" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentialsConfig.property.maxCredValidationSeconds"></a>

```csharp
public double MaxCredValidationSeconds { get; set; }
```

- *Type:* double

If 'validate_creds' is true, the number of seconds after which to give up validating credentials.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/azure_access_credentials#max_cred_validation_seconds EphemeralVaultAzureAccessCredentials#max_cred_validation_seconds}

---

##### `MountId`<sup>Optional</sup> <a name="MountId" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentialsConfig.property.mountId"></a>

```csharp
public string MountId { get; set; }
```

- *Type:* string

Terraform ID of the mount resource. Used to defer the provisioning of the ephemeral resource till the apply stage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/azure_access_credentials#mount_id EphemeralVaultAzureAccessCredentials#mount_id}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentialsConfig.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/azure_access_credentials#namespace EphemeralVaultAzureAccessCredentials#namespace}

---

##### `NumSecondsBetweenTests`<sup>Optional</sup> <a name="NumSecondsBetweenTests" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentialsConfig.property.numSecondsBetweenTests"></a>

```csharp
public double NumSecondsBetweenTests { get; set; }
```

- *Type:* double

If 'validate_creds' is true, the number of seconds to wait between each test of generated credentials.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/azure_access_credentials#num_seconds_between_tests EphemeralVaultAzureAccessCredentials#num_seconds_between_tests}

---

##### `NumSequentialSuccesses`<sup>Optional</sup> <a name="NumSequentialSuccesses" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentialsConfig.property.numSequentialSuccesses"></a>

```csharp
public double NumSequentialSuccesses { get; set; }
```

- *Type:* double

If 'validate_creds' is true, the number of sequential successes required to validate generated credentials.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/azure_access_credentials#num_sequential_successes EphemeralVaultAzureAccessCredentials#num_sequential_successes}

---

##### `RequestMetadata`<sup>Optional</sup> <a name="RequestMetadata" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentialsConfig.property.requestMetadata"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> RequestMetadata { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Input metadata to send with the request to Vault.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/azure_access_credentials#request_metadata EphemeralVaultAzureAccessCredentials#request_metadata}

---

##### `SubscriptionId`<sup>Optional</sup> <a name="SubscriptionId" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentialsConfig.property.subscriptionId"></a>

```csharp
public string SubscriptionId { get; set; }
```

- *Type:* string

The subscription ID to use during credential validation. Defaults to the subscription ID configured in the Vault backend.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/azure_access_credentials#subscription_id EphemeralVaultAzureAccessCredentials#subscription_id}

---

##### `TenantId`<sup>Optional</sup> <a name="TenantId" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentialsConfig.property.tenantId"></a>

```csharp
public string TenantId { get; set; }
```

- *Type:* string

The tenant ID to use during credential validation. Defaults to the tenant ID configured in the Vault backend.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/azure_access_credentials#tenant_id EphemeralVaultAzureAccessCredentials#tenant_id}

---

##### `ValidateCreds`<sup>Optional</sup> <a name="ValidateCreds" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentialsConfig.property.validateCreds"></a>

```csharp
public bool|IResolvable ValidateCreds { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether generated credentials should be validated before being returned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/azure_access_credentials#validate_creds EphemeralVaultAzureAccessCredentials#validate_creds}

---



