# `oktaAuthBackend` Submodule <a name="`oktaAuthBackend` Submodule" id="@cdktn/provider-vault.oktaAuthBackend"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OktaAuthBackend <a name="OktaAuthBackend" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackend"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/okta_auth_backend vault_okta_auth_backend}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackend.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Vault;

new OktaAuthBackend(Construct Scope, string Id, OktaAuthBackendConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackend.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackend.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackend.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendConfig">OktaAuthBackendConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackend.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackend.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackend.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendConfig">OktaAuthBackendConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackend.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackend.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackend.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackend.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackend.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackend.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackend.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackend.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackend.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackend.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackend.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackend.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackend.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackend.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackend.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackend.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackend.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackend.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackend.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackend.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackend.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackend.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackend.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackend.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackend.putGroup">PutGroup</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackend.putTune">PutTune</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackend.putUser">PutUser</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackend.resetAliasMetadata">ResetAliasMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackend.resetApiToken">ResetApiToken</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackend.resetApiTokenWo">ResetApiTokenWo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackend.resetApiTokenWoVersion">ResetApiTokenWoVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackend.resetBaseUrl">ResetBaseUrl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackend.resetBypassOktaMfa">ResetBypassOktaMfa</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackend.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackend.resetDisableRemount">ResetDisableRemount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackend.resetGroup">ResetGroup</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackend.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackend.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackend.resetOrganization">ResetOrganization</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackend.resetOrgName">ResetOrgName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackend.resetPath">ResetPath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackend.resetToken">ResetToken</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackend.resetTokenBoundCidrs">ResetTokenBoundCidrs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackend.resetTokenExplicitMaxTtl">ResetTokenExplicitMaxTtl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackend.resetTokenMaxTtl">ResetTokenMaxTtl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackend.resetTokenNoDefaultPolicy">ResetTokenNoDefaultPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackend.resetTokenNumUses">ResetTokenNumUses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackend.resetTokenPeriod">ResetTokenPeriod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackend.resetTokenPolicies">ResetTokenPolicies</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackend.resetTokenTtl">ResetTokenTtl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackend.resetTokenType">ResetTokenType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackend.resetTune">ResetTune</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackend.resetUser">ResetUser</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackend.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackend.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackend.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackend.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackend.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackend.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackend.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackend.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackend.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackend.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackend.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackend.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackend.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackend.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackend.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackend.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackend.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackend.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackend.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackend.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackend.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackend.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackend.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackend.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackend.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackend.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackend.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackend.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackend.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackend.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackend.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackend.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackend.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackend.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackend.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackend.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackend.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackend.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackend.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackend.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackend.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackend.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackend.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackend.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackend.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutGroup` <a name="PutGroup" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackend.putGroup"></a>

```csharp
private void PutGroup(IResolvable|OktaAuthBackendGroup[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackend.putGroup.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendGroup">OktaAuthBackendGroup</a>[]

---

##### `PutTune` <a name="PutTune" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackend.putTune"></a>

```csharp
private void PutTune(IResolvable|OktaAuthBackendTune[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackend.putTune.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendTune">OktaAuthBackendTune</a>[]

---

##### `PutUser` <a name="PutUser" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackend.putUser"></a>

```csharp
private void PutUser(IResolvable|OktaAuthBackendUser[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackend.putUser.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendUser">OktaAuthBackendUser</a>[]

---

##### `ResetAliasMetadata` <a name="ResetAliasMetadata" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackend.resetAliasMetadata"></a>

```csharp
private void ResetAliasMetadata()
```

##### `ResetApiToken` <a name="ResetApiToken" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackend.resetApiToken"></a>

```csharp
private void ResetApiToken()
```

##### `ResetApiTokenWo` <a name="ResetApiTokenWo" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackend.resetApiTokenWo"></a>

```csharp
private void ResetApiTokenWo()
```

##### `ResetApiTokenWoVersion` <a name="ResetApiTokenWoVersion" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackend.resetApiTokenWoVersion"></a>

```csharp
private void ResetApiTokenWoVersion()
```

##### `ResetBaseUrl` <a name="ResetBaseUrl" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackend.resetBaseUrl"></a>

```csharp
private void ResetBaseUrl()
```

##### `ResetBypassOktaMfa` <a name="ResetBypassOktaMfa" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackend.resetBypassOktaMfa"></a>

```csharp
private void ResetBypassOktaMfa()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackend.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetDisableRemount` <a name="ResetDisableRemount" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackend.resetDisableRemount"></a>

```csharp
private void ResetDisableRemount()
```

##### `ResetGroup` <a name="ResetGroup" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackend.resetGroup"></a>

```csharp
private void ResetGroup()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackend.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackend.resetNamespace"></a>

```csharp
private void ResetNamespace()
```

##### `ResetOrganization` <a name="ResetOrganization" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackend.resetOrganization"></a>

```csharp
private void ResetOrganization()
```

##### `ResetOrgName` <a name="ResetOrgName" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackend.resetOrgName"></a>

```csharp
private void ResetOrgName()
```

##### `ResetPath` <a name="ResetPath" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackend.resetPath"></a>

```csharp
private void ResetPath()
```

##### `ResetToken` <a name="ResetToken" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackend.resetToken"></a>

```csharp
private void ResetToken()
```

##### `ResetTokenBoundCidrs` <a name="ResetTokenBoundCidrs" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackend.resetTokenBoundCidrs"></a>

```csharp
private void ResetTokenBoundCidrs()
```

##### `ResetTokenExplicitMaxTtl` <a name="ResetTokenExplicitMaxTtl" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackend.resetTokenExplicitMaxTtl"></a>

```csharp
private void ResetTokenExplicitMaxTtl()
```

##### `ResetTokenMaxTtl` <a name="ResetTokenMaxTtl" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackend.resetTokenMaxTtl"></a>

```csharp
private void ResetTokenMaxTtl()
```

##### `ResetTokenNoDefaultPolicy` <a name="ResetTokenNoDefaultPolicy" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackend.resetTokenNoDefaultPolicy"></a>

```csharp
private void ResetTokenNoDefaultPolicy()
```

##### `ResetTokenNumUses` <a name="ResetTokenNumUses" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackend.resetTokenNumUses"></a>

```csharp
private void ResetTokenNumUses()
```

##### `ResetTokenPeriod` <a name="ResetTokenPeriod" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackend.resetTokenPeriod"></a>

```csharp
private void ResetTokenPeriod()
```

##### `ResetTokenPolicies` <a name="ResetTokenPolicies" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackend.resetTokenPolicies"></a>

```csharp
private void ResetTokenPolicies()
```

##### `ResetTokenTtl` <a name="ResetTokenTtl" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackend.resetTokenTtl"></a>

```csharp
private void ResetTokenTtl()
```

##### `ResetTokenType` <a name="ResetTokenType" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackend.resetTokenType"></a>

```csharp
private void ResetTokenType()
```

##### `ResetTune` <a name="ResetTune" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackend.resetTune"></a>

```csharp
private void ResetTune()
```

##### `ResetUser` <a name="ResetUser" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackend.resetUser"></a>

```csharp
private void ResetUser()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackend.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackend.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackend.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackend.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a OktaAuthBackend resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackend.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Vault;

OktaAuthBackend.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackend.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackend.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Vault;

OktaAuthBackend.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackend.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackend.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Vault;

OktaAuthBackend.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackend.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackend.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Vault;

OktaAuthBackend.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a OktaAuthBackend resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackend.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackend.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the OktaAuthBackend to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackend.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing OktaAuthBackend that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/okta_auth_backend#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackend.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the OktaAuthBackend to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackend.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackend.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackend.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackend.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackend.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackend.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackend.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackend.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackend.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackend.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackend.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackend.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackend.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackend.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackend.property.accessor">Accessor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackend.property.group">Group</a></code> | <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendGroupList">OktaAuthBackendGroupList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackend.property.tune">Tune</a></code> | <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendTuneList">OktaAuthBackendTuneList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackend.property.user">User</a></code> | <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendUserList">OktaAuthBackendUserList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackend.property.aliasMetadataInput">AliasMetadataInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackend.property.apiTokenInput">ApiTokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackend.property.apiTokenWoInput">ApiTokenWoInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackend.property.apiTokenWoVersionInput">ApiTokenWoVersionInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackend.property.baseUrlInput">BaseUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackend.property.bypassOktaMfaInput">BypassOktaMfaInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackend.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackend.property.disableRemountInput">DisableRemountInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackend.property.groupInput">GroupInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendGroup">OktaAuthBackendGroup</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackend.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackend.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackend.property.organizationInput">OrganizationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackend.property.orgNameInput">OrgNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackend.property.pathInput">PathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackend.property.tokenBoundCidrsInput">TokenBoundCidrsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackend.property.tokenExplicitMaxTtlInput">TokenExplicitMaxTtlInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackend.property.tokenInput">TokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackend.property.tokenMaxTtlInput">TokenMaxTtlInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackend.property.tokenNoDefaultPolicyInput">TokenNoDefaultPolicyInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackend.property.tokenNumUsesInput">TokenNumUsesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackend.property.tokenPeriodInput">TokenPeriodInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackend.property.tokenPoliciesInput">TokenPoliciesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackend.property.tokenTtlInput">TokenTtlInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackend.property.tokenTypeInput">TokenTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackend.property.tuneInput">TuneInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendTune">OktaAuthBackendTune</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackend.property.userInput">UserInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendUser">OktaAuthBackendUser</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackend.property.aliasMetadata">AliasMetadata</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackend.property.apiToken">ApiToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackend.property.apiTokenWo">ApiTokenWo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackend.property.apiTokenWoVersion">ApiTokenWoVersion</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackend.property.baseUrl">BaseUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackend.property.bypassOktaMfa">BypassOktaMfa</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackend.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackend.property.disableRemount">DisableRemount</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackend.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackend.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackend.property.organization">Organization</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackend.property.orgName">OrgName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackend.property.path">Path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackend.property.token">Token</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackend.property.tokenBoundCidrs">TokenBoundCidrs</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackend.property.tokenExplicitMaxTtl">TokenExplicitMaxTtl</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackend.property.tokenMaxTtl">TokenMaxTtl</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackend.property.tokenNoDefaultPolicy">TokenNoDefaultPolicy</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackend.property.tokenNumUses">TokenNumUses</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackend.property.tokenPeriod">TokenPeriod</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackend.property.tokenPolicies">TokenPolicies</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackend.property.tokenTtl">TokenTtl</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackend.property.tokenType">TokenType</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackend.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackend.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackend.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackend.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackend.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackend.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackend.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackend.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackend.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackend.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackend.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackend.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackend.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackend.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Accessor`<sup>Required</sup> <a name="Accessor" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackend.property.accessor"></a>

```csharp
public string Accessor { get; }
```

- *Type:* string

---

##### `Group`<sup>Required</sup> <a name="Group" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackend.property.group"></a>

```csharp
public OktaAuthBackendGroupList Group { get; }
```

- *Type:* <a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendGroupList">OktaAuthBackendGroupList</a>

---

##### `Tune`<sup>Required</sup> <a name="Tune" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackend.property.tune"></a>

```csharp
public OktaAuthBackendTuneList Tune { get; }
```

- *Type:* <a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendTuneList">OktaAuthBackendTuneList</a>

---

##### `User`<sup>Required</sup> <a name="User" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackend.property.user"></a>

```csharp
public OktaAuthBackendUserList User { get; }
```

- *Type:* <a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendUserList">OktaAuthBackendUserList</a>

---

##### `AliasMetadataInput`<sup>Optional</sup> <a name="AliasMetadataInput" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackend.property.aliasMetadataInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> AliasMetadataInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ApiTokenInput`<sup>Optional</sup> <a name="ApiTokenInput" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackend.property.apiTokenInput"></a>

```csharp
public string ApiTokenInput { get; }
```

- *Type:* string

---

##### `ApiTokenWoInput`<sup>Optional</sup> <a name="ApiTokenWoInput" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackend.property.apiTokenWoInput"></a>

```csharp
public string ApiTokenWoInput { get; }
```

- *Type:* string

---

##### `ApiTokenWoVersionInput`<sup>Optional</sup> <a name="ApiTokenWoVersionInput" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackend.property.apiTokenWoVersionInput"></a>

```csharp
public double ApiTokenWoVersionInput { get; }
```

- *Type:* double

---

##### `BaseUrlInput`<sup>Optional</sup> <a name="BaseUrlInput" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackend.property.baseUrlInput"></a>

```csharp
public string BaseUrlInput { get; }
```

- *Type:* string

---

##### `BypassOktaMfaInput`<sup>Optional</sup> <a name="BypassOktaMfaInput" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackend.property.bypassOktaMfaInput"></a>

```csharp
public bool|IResolvable BypassOktaMfaInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackend.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DisableRemountInput`<sup>Optional</sup> <a name="DisableRemountInput" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackend.property.disableRemountInput"></a>

```csharp
public bool|IResolvable DisableRemountInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `GroupInput`<sup>Optional</sup> <a name="GroupInput" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackend.property.groupInput"></a>

```csharp
public IResolvable|OktaAuthBackendGroup[] GroupInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendGroup">OktaAuthBackendGroup</a>[]

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackend.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackend.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `OrganizationInput`<sup>Optional</sup> <a name="OrganizationInput" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackend.property.organizationInput"></a>

```csharp
public string OrganizationInput { get; }
```

- *Type:* string

---

##### `OrgNameInput`<sup>Optional</sup> <a name="OrgNameInput" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackend.property.orgNameInput"></a>

```csharp
public string OrgNameInput { get; }
```

- *Type:* string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackend.property.pathInput"></a>

```csharp
public string PathInput { get; }
```

- *Type:* string

---

##### `TokenBoundCidrsInput`<sup>Optional</sup> <a name="TokenBoundCidrsInput" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackend.property.tokenBoundCidrsInput"></a>

```csharp
public string[] TokenBoundCidrsInput { get; }
```

- *Type:* string[]

---

##### `TokenExplicitMaxTtlInput`<sup>Optional</sup> <a name="TokenExplicitMaxTtlInput" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackend.property.tokenExplicitMaxTtlInput"></a>

```csharp
public double TokenExplicitMaxTtlInput { get; }
```

- *Type:* double

---

##### `TokenInput`<sup>Optional</sup> <a name="TokenInput" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackend.property.tokenInput"></a>

```csharp
public string TokenInput { get; }
```

- *Type:* string

---

##### `TokenMaxTtlInput`<sup>Optional</sup> <a name="TokenMaxTtlInput" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackend.property.tokenMaxTtlInput"></a>

```csharp
public double TokenMaxTtlInput { get; }
```

- *Type:* double

---

##### `TokenNoDefaultPolicyInput`<sup>Optional</sup> <a name="TokenNoDefaultPolicyInput" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackend.property.tokenNoDefaultPolicyInput"></a>

```csharp
public bool|IResolvable TokenNoDefaultPolicyInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `TokenNumUsesInput`<sup>Optional</sup> <a name="TokenNumUsesInput" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackend.property.tokenNumUsesInput"></a>

```csharp
public double TokenNumUsesInput { get; }
```

- *Type:* double

---

##### `TokenPeriodInput`<sup>Optional</sup> <a name="TokenPeriodInput" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackend.property.tokenPeriodInput"></a>

```csharp
public double TokenPeriodInput { get; }
```

- *Type:* double

---

##### `TokenPoliciesInput`<sup>Optional</sup> <a name="TokenPoliciesInput" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackend.property.tokenPoliciesInput"></a>

```csharp
public string[] TokenPoliciesInput { get; }
```

- *Type:* string[]

---

##### `TokenTtlInput`<sup>Optional</sup> <a name="TokenTtlInput" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackend.property.tokenTtlInput"></a>

```csharp
public double TokenTtlInput { get; }
```

- *Type:* double

---

##### `TokenTypeInput`<sup>Optional</sup> <a name="TokenTypeInput" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackend.property.tokenTypeInput"></a>

```csharp
public string TokenTypeInput { get; }
```

- *Type:* string

---

##### `TuneInput`<sup>Optional</sup> <a name="TuneInput" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackend.property.tuneInput"></a>

```csharp
public IResolvable|OktaAuthBackendTune[] TuneInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendTune">OktaAuthBackendTune</a>[]

---

##### `UserInput`<sup>Optional</sup> <a name="UserInput" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackend.property.userInput"></a>

```csharp
public IResolvable|OktaAuthBackendUser[] UserInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendUser">OktaAuthBackendUser</a>[]

---

##### `AliasMetadata`<sup>Required</sup> <a name="AliasMetadata" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackend.property.aliasMetadata"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> AliasMetadata { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ApiToken`<sup>Required</sup> <a name="ApiToken" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackend.property.apiToken"></a>

```csharp
public string ApiToken { get; }
```

- *Type:* string

---

##### `ApiTokenWo`<sup>Required</sup> <a name="ApiTokenWo" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackend.property.apiTokenWo"></a>

```csharp
public string ApiTokenWo { get; }
```

- *Type:* string

---

##### `ApiTokenWoVersion`<sup>Required</sup> <a name="ApiTokenWoVersion" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackend.property.apiTokenWoVersion"></a>

```csharp
public double ApiTokenWoVersion { get; }
```

- *Type:* double

---

##### `BaseUrl`<sup>Required</sup> <a name="BaseUrl" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackend.property.baseUrl"></a>

```csharp
public string BaseUrl { get; }
```

- *Type:* string

---

##### `BypassOktaMfa`<sup>Required</sup> <a name="BypassOktaMfa" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackend.property.bypassOktaMfa"></a>

```csharp
public bool|IResolvable BypassOktaMfa { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackend.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisableRemount`<sup>Required</sup> <a name="DisableRemount" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackend.property.disableRemount"></a>

```csharp
public bool|IResolvable DisableRemount { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackend.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackend.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `Organization`<sup>Required</sup> <a name="Organization" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackend.property.organization"></a>

```csharp
public string Organization { get; }
```

- *Type:* string

---

##### `OrgName`<sup>Required</sup> <a name="OrgName" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackend.property.orgName"></a>

```csharp
public string OrgName { get; }
```

- *Type:* string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackend.property.path"></a>

```csharp
public string Path { get; }
```

- *Type:* string

---

##### `Token`<sup>Required</sup> <a name="Token" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackend.property.token"></a>

```csharp
public string Token { get; }
```

- *Type:* string

---

##### `TokenBoundCidrs`<sup>Required</sup> <a name="TokenBoundCidrs" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackend.property.tokenBoundCidrs"></a>

```csharp
public string[] TokenBoundCidrs { get; }
```

- *Type:* string[]

---

##### `TokenExplicitMaxTtl`<sup>Required</sup> <a name="TokenExplicitMaxTtl" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackend.property.tokenExplicitMaxTtl"></a>

```csharp
public double TokenExplicitMaxTtl { get; }
```

- *Type:* double

---

##### `TokenMaxTtl`<sup>Required</sup> <a name="TokenMaxTtl" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackend.property.tokenMaxTtl"></a>

```csharp
public double TokenMaxTtl { get; }
```

- *Type:* double

---

##### `TokenNoDefaultPolicy`<sup>Required</sup> <a name="TokenNoDefaultPolicy" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackend.property.tokenNoDefaultPolicy"></a>

```csharp
public bool|IResolvable TokenNoDefaultPolicy { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `TokenNumUses`<sup>Required</sup> <a name="TokenNumUses" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackend.property.tokenNumUses"></a>

```csharp
public double TokenNumUses { get; }
```

- *Type:* double

---

##### `TokenPeriod`<sup>Required</sup> <a name="TokenPeriod" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackend.property.tokenPeriod"></a>

```csharp
public double TokenPeriod { get; }
```

- *Type:* double

---

##### `TokenPolicies`<sup>Required</sup> <a name="TokenPolicies" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackend.property.tokenPolicies"></a>

```csharp
public string[] TokenPolicies { get; }
```

- *Type:* string[]

---

##### `TokenTtl`<sup>Required</sup> <a name="TokenTtl" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackend.property.tokenTtl"></a>

```csharp
public double TokenTtl { get; }
```

- *Type:* double

---

##### `TokenType`<sup>Required</sup> <a name="TokenType" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackend.property.tokenType"></a>

```csharp
public string TokenType { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackend.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackend.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### OktaAuthBackendConfig <a name="OktaAuthBackendConfig" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Vault;

new OktaAuthBackendConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    System.Collections.Generic.IDictionary<string, string> AliasMetadata = null,
    string ApiToken = null,
    string ApiTokenWo = null,
    double ApiTokenWoVersion = null,
    string BaseUrl = null,
    bool|IResolvable BypassOktaMfa = null,
    string Description = null,
    bool|IResolvable DisableRemount = null,
    IResolvable|OktaAuthBackendGroup[] Group = null,
    string Id = null,
    string Namespace = null,
    string Organization = null,
    string OrgName = null,
    string Path = null,
    string Token = null,
    string[] TokenBoundCidrs = null,
    double TokenExplicitMaxTtl = null,
    double TokenMaxTtl = null,
    bool|IResolvable TokenNoDefaultPolicy = null,
    double TokenNumUses = null,
    double TokenPeriod = null,
    string[] TokenPolicies = null,
    double TokenTtl = null,
    string TokenType = null,
    IResolvable|OktaAuthBackendTune[] Tune = null,
    IResolvable|OktaAuthBackendUser[] User = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendConfig.property.aliasMetadata">AliasMetadata</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | The metadata to be tied to generated entity alias. |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendConfig.property.apiToken">ApiToken</a></code> | <code>string</code> | The Okta API token. |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendConfig.property.apiTokenWo">ApiTokenWo</a></code> | <code>string</code> | Write-only Okta API token. |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendConfig.property.apiTokenWoVersion">ApiTokenWoVersion</a></code> | <code>double</code> | Version counter for write-only api_token. |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendConfig.property.baseUrl">BaseUrl</a></code> | <code>string</code> | The Okta url. Examples: oktapreview.com, okta.com (default). |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendConfig.property.bypassOktaMfa">BypassOktaMfa</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | When true, requests by Okta for a MFA check will be bypassed. |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendConfig.property.description">Description</a></code> | <code>string</code> | The description of the auth backend. |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendConfig.property.disableRemount">DisableRemount</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | If set, opts out of mount migration on path updates. |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendConfig.property.group">Group</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendGroup">OktaAuthBackendGroup</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/okta_auth_backend#group OktaAuthBackend#group}. |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/okta_auth_backend#id OktaAuthBackend#id}. |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendConfig.property.namespace">Namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendConfig.property.organization">Organization</a></code> | <code>string</code> | The Okta organization. This will be the first part of the url https://XXX.okta.com. Use org_name instead. |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendConfig.property.orgName">OrgName</a></code> | <code>string</code> | The Okta organization. This will be the first part of the url https://XXX.okta.com. |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendConfig.property.path">Path</a></code> | <code>string</code> | path to mount the backend. |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendConfig.property.token">Token</a></code> | <code>string</code> | The Okta API token. |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendConfig.property.tokenBoundCidrs">TokenBoundCidrs</a></code> | <code>string[]</code> | Specifies the blocks of IP addresses which are allowed to use the generated token. |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendConfig.property.tokenExplicitMaxTtl">TokenExplicitMaxTtl</a></code> | <code>double</code> | Generated Token's Explicit Maximum TTL in seconds. |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendConfig.property.tokenMaxTtl">TokenMaxTtl</a></code> | <code>double</code> | The maximum lifetime of the generated token. |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendConfig.property.tokenNoDefaultPolicy">TokenNoDefaultPolicy</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | If true, the 'default' policy will not automatically be added to generated tokens. |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendConfig.property.tokenNumUses">TokenNumUses</a></code> | <code>double</code> | The maximum number of times a token may be used, a value of zero means unlimited. |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendConfig.property.tokenPeriod">TokenPeriod</a></code> | <code>double</code> | Generated Token's Period. |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendConfig.property.tokenPolicies">TokenPolicies</a></code> | <code>string[]</code> | Generated Token's Policies. |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendConfig.property.tokenTtl">TokenTtl</a></code> | <code>double</code> | The initial ttl of the token to generate in seconds. |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendConfig.property.tokenType">TokenType</a></code> | <code>string</code> | The type of token to generate, service or batch. |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendConfig.property.tune">Tune</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendTune">OktaAuthBackendTune</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/okta_auth_backend#tune OktaAuthBackend#tune}. |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendConfig.property.user">User</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendUser">OktaAuthBackendUser</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/okta_auth_backend#user OktaAuthBackend#user}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AliasMetadata`<sup>Optional</sup> <a name="AliasMetadata" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendConfig.property.aliasMetadata"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> AliasMetadata { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

The metadata to be tied to generated entity alias.

This should be a list or map containing the metadata in key value pairs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/okta_auth_backend#alias_metadata OktaAuthBackend#alias_metadata}

---

##### `ApiToken`<sup>Optional</sup> <a name="ApiToken" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendConfig.property.apiToken"></a>

```csharp
public string ApiToken { get; set; }
```

- *Type:* string

The Okta API token.

This is required to query Okta for user group membership. If this is not supplied only locally configured groups will be enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/okta_auth_backend#api_token OktaAuthBackend#api_token}

---

##### `ApiTokenWo`<sup>Optional</sup> <a name="ApiTokenWo" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendConfig.property.apiTokenWo"></a>

```csharp
public string ApiTokenWo { get; set; }
```

- *Type:* string

Write-only Okta API token.

This is required to query Okta for user group membership. If this is not supplied only locally configured groups will be enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/okta_auth_backend#api_token_wo OktaAuthBackend#api_token_wo}

---

##### `ApiTokenWoVersion`<sup>Optional</sup> <a name="ApiTokenWoVersion" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendConfig.property.apiTokenWoVersion"></a>

```csharp
public double ApiTokenWoVersion { get; set; }
```

- *Type:* double

Version counter for write-only api_token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/okta_auth_backend#api_token_wo_version OktaAuthBackend#api_token_wo_version}

---

##### `BaseUrl`<sup>Optional</sup> <a name="BaseUrl" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendConfig.property.baseUrl"></a>

```csharp
public string BaseUrl { get; set; }
```

- *Type:* string

The Okta url. Examples: oktapreview.com, okta.com (default).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/okta_auth_backend#base_url OktaAuthBackend#base_url}

---

##### `BypassOktaMfa`<sup>Optional</sup> <a name="BypassOktaMfa" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendConfig.property.bypassOktaMfa"></a>

```csharp
public bool|IResolvable BypassOktaMfa { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

When true, requests by Okta for a MFA check will be bypassed.

This also disallows certain status checks on the account, such as whether the password is expired.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/okta_auth_backend#bypass_okta_mfa OktaAuthBackend#bypass_okta_mfa}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

The description of the auth backend.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/okta_auth_backend#description OktaAuthBackend#description}

---

##### `DisableRemount`<sup>Optional</sup> <a name="DisableRemount" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendConfig.property.disableRemount"></a>

```csharp
public bool|IResolvable DisableRemount { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

If set, opts out of mount migration on path updates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/okta_auth_backend#disable_remount OktaAuthBackend#disable_remount}

---

##### `Group`<sup>Optional</sup> <a name="Group" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendConfig.property.group"></a>

```csharp
public IResolvable|OktaAuthBackendGroup[] Group { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendGroup">OktaAuthBackendGroup</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/okta_auth_backend#group OktaAuthBackend#group}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/okta_auth_backend#id OktaAuthBackend#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendConfig.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/okta_auth_backend#namespace OktaAuthBackend#namespace}

---

##### `Organization`<sup>Optional</sup> <a name="Organization" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendConfig.property.organization"></a>

```csharp
public string Organization { get; set; }
```

- *Type:* string

The Okta organization. This will be the first part of the url https://XXX.okta.com. Use org_name instead.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/okta_auth_backend#organization OktaAuthBackend#organization}

---

##### `OrgName`<sup>Optional</sup> <a name="OrgName" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendConfig.property.orgName"></a>

```csharp
public string OrgName { get; set; }
```

- *Type:* string

The Okta organization. This will be the first part of the url https://XXX.okta.com.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/okta_auth_backend#org_name OktaAuthBackend#org_name}

---

##### `Path`<sup>Optional</sup> <a name="Path" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendConfig.property.path"></a>

```csharp
public string Path { get; set; }
```

- *Type:* string

path to mount the backend.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/okta_auth_backend#path OktaAuthBackend#path}

---

##### `Token`<sup>Optional</sup> <a name="Token" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendConfig.property.token"></a>

```csharp
public string Token { get; set; }
```

- *Type:* string

The Okta API token.

This is required to query Okta for user group membership. If this is not supplied only locally configured groups will be enabled. Use api_token instead.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/okta_auth_backend#token OktaAuthBackend#token}

---

##### `TokenBoundCidrs`<sup>Optional</sup> <a name="TokenBoundCidrs" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendConfig.property.tokenBoundCidrs"></a>

```csharp
public string[] TokenBoundCidrs { get; set; }
```

- *Type:* string[]

Specifies the blocks of IP addresses which are allowed to use the generated token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/okta_auth_backend#token_bound_cidrs OktaAuthBackend#token_bound_cidrs}

---

##### `TokenExplicitMaxTtl`<sup>Optional</sup> <a name="TokenExplicitMaxTtl" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendConfig.property.tokenExplicitMaxTtl"></a>

```csharp
public double TokenExplicitMaxTtl { get; set; }
```

- *Type:* double

Generated Token's Explicit Maximum TTL in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/okta_auth_backend#token_explicit_max_ttl OktaAuthBackend#token_explicit_max_ttl}

---

##### `TokenMaxTtl`<sup>Optional</sup> <a name="TokenMaxTtl" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendConfig.property.tokenMaxTtl"></a>

```csharp
public double TokenMaxTtl { get; set; }
```

- *Type:* double

The maximum lifetime of the generated token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/okta_auth_backend#token_max_ttl OktaAuthBackend#token_max_ttl}

---

##### `TokenNoDefaultPolicy`<sup>Optional</sup> <a name="TokenNoDefaultPolicy" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendConfig.property.tokenNoDefaultPolicy"></a>

```csharp
public bool|IResolvable TokenNoDefaultPolicy { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

If true, the 'default' policy will not automatically be added to generated tokens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/okta_auth_backend#token_no_default_policy OktaAuthBackend#token_no_default_policy}

---

##### `TokenNumUses`<sup>Optional</sup> <a name="TokenNumUses" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendConfig.property.tokenNumUses"></a>

```csharp
public double TokenNumUses { get; set; }
```

- *Type:* double

The maximum number of times a token may be used, a value of zero means unlimited.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/okta_auth_backend#token_num_uses OktaAuthBackend#token_num_uses}

---

##### `TokenPeriod`<sup>Optional</sup> <a name="TokenPeriod" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendConfig.property.tokenPeriod"></a>

```csharp
public double TokenPeriod { get; set; }
```

- *Type:* double

Generated Token's Period.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/okta_auth_backend#token_period OktaAuthBackend#token_period}

---

##### `TokenPolicies`<sup>Optional</sup> <a name="TokenPolicies" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendConfig.property.tokenPolicies"></a>

```csharp
public string[] TokenPolicies { get; set; }
```

- *Type:* string[]

Generated Token's Policies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/okta_auth_backend#token_policies OktaAuthBackend#token_policies}

---

##### `TokenTtl`<sup>Optional</sup> <a name="TokenTtl" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendConfig.property.tokenTtl"></a>

```csharp
public double TokenTtl { get; set; }
```

- *Type:* double

The initial ttl of the token to generate in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/okta_auth_backend#token_ttl OktaAuthBackend#token_ttl}

---

##### `TokenType`<sup>Optional</sup> <a name="TokenType" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendConfig.property.tokenType"></a>

```csharp
public string TokenType { get; set; }
```

- *Type:* string

The type of token to generate, service or batch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/okta_auth_backend#token_type OktaAuthBackend#token_type}

---

##### `Tune`<sup>Optional</sup> <a name="Tune" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendConfig.property.tune"></a>

```csharp
public IResolvable|OktaAuthBackendTune[] Tune { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendTune">OktaAuthBackendTune</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/okta_auth_backend#tune OktaAuthBackend#tune}.

---

##### `User`<sup>Optional</sup> <a name="User" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendConfig.property.user"></a>

```csharp
public IResolvable|OktaAuthBackendUser[] User { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendUser">OktaAuthBackendUser</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/okta_auth_backend#user OktaAuthBackend#user}.

---

### OktaAuthBackendGroup <a name="OktaAuthBackendGroup" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendGroup"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendGroup.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Vault;

new OktaAuthBackendGroup {
    string GroupName = null,
    string[] Policies = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendGroup.property.groupName">GroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/okta_auth_backend#group_name OktaAuthBackend#group_name}. |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendGroup.property.policies">Policies</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/okta_auth_backend#policies OktaAuthBackend#policies}. |

---

##### `GroupName`<sup>Optional</sup> <a name="GroupName" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendGroup.property.groupName"></a>

```csharp
public string GroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/okta_auth_backend#group_name OktaAuthBackend#group_name}.

---

##### `Policies`<sup>Optional</sup> <a name="Policies" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendGroup.property.policies"></a>

```csharp
public string[] Policies { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/okta_auth_backend#policies OktaAuthBackend#policies}.

---

### OktaAuthBackendTune <a name="OktaAuthBackendTune" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendTune"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendTune.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Vault;

new OktaAuthBackendTune {
    string[] AllowedResponseHeaders = null,
    string[] AuditNonHmacRequestKeys = null,
    string[] AuditNonHmacResponseKeys = null,
    string DefaultLeaseTtl = null,
    string ListingVisibility = null,
    string MaxLeaseTtl = null,
    string[] PassthroughRequestHeaders = null,
    string TokenType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendTune.property.allowedResponseHeaders">AllowedResponseHeaders</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/okta_auth_backend#allowed_response_headers OktaAuthBackend#allowed_response_headers}. |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendTune.property.auditNonHmacRequestKeys">AuditNonHmacRequestKeys</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/okta_auth_backend#audit_non_hmac_request_keys OktaAuthBackend#audit_non_hmac_request_keys}. |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendTune.property.auditNonHmacResponseKeys">AuditNonHmacResponseKeys</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/okta_auth_backend#audit_non_hmac_response_keys OktaAuthBackend#audit_non_hmac_response_keys}. |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendTune.property.defaultLeaseTtl">DefaultLeaseTtl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/okta_auth_backend#default_lease_ttl OktaAuthBackend#default_lease_ttl}. |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendTune.property.listingVisibility">ListingVisibility</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/okta_auth_backend#listing_visibility OktaAuthBackend#listing_visibility}. |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendTune.property.maxLeaseTtl">MaxLeaseTtl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/okta_auth_backend#max_lease_ttl OktaAuthBackend#max_lease_ttl}. |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendTune.property.passthroughRequestHeaders">PassthroughRequestHeaders</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/okta_auth_backend#passthrough_request_headers OktaAuthBackend#passthrough_request_headers}. |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendTune.property.tokenType">TokenType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/okta_auth_backend#token_type OktaAuthBackend#token_type}. |

---

##### `AllowedResponseHeaders`<sup>Optional</sup> <a name="AllowedResponseHeaders" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendTune.property.allowedResponseHeaders"></a>

```csharp
public string[] AllowedResponseHeaders { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/okta_auth_backend#allowed_response_headers OktaAuthBackend#allowed_response_headers}.

---

##### `AuditNonHmacRequestKeys`<sup>Optional</sup> <a name="AuditNonHmacRequestKeys" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendTune.property.auditNonHmacRequestKeys"></a>

```csharp
public string[] AuditNonHmacRequestKeys { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/okta_auth_backend#audit_non_hmac_request_keys OktaAuthBackend#audit_non_hmac_request_keys}.

---

##### `AuditNonHmacResponseKeys`<sup>Optional</sup> <a name="AuditNonHmacResponseKeys" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendTune.property.auditNonHmacResponseKeys"></a>

```csharp
public string[] AuditNonHmacResponseKeys { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/okta_auth_backend#audit_non_hmac_response_keys OktaAuthBackend#audit_non_hmac_response_keys}.

---

##### `DefaultLeaseTtl`<sup>Optional</sup> <a name="DefaultLeaseTtl" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendTune.property.defaultLeaseTtl"></a>

```csharp
public string DefaultLeaseTtl { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/okta_auth_backend#default_lease_ttl OktaAuthBackend#default_lease_ttl}.

---

##### `ListingVisibility`<sup>Optional</sup> <a name="ListingVisibility" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendTune.property.listingVisibility"></a>

```csharp
public string ListingVisibility { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/okta_auth_backend#listing_visibility OktaAuthBackend#listing_visibility}.

---

##### `MaxLeaseTtl`<sup>Optional</sup> <a name="MaxLeaseTtl" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendTune.property.maxLeaseTtl"></a>

```csharp
public string MaxLeaseTtl { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/okta_auth_backend#max_lease_ttl OktaAuthBackend#max_lease_ttl}.

---

##### `PassthroughRequestHeaders`<sup>Optional</sup> <a name="PassthroughRequestHeaders" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendTune.property.passthroughRequestHeaders"></a>

```csharp
public string[] PassthroughRequestHeaders { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/okta_auth_backend#passthrough_request_headers OktaAuthBackend#passthrough_request_headers}.

---

##### `TokenType`<sup>Optional</sup> <a name="TokenType" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendTune.property.tokenType"></a>

```csharp
public string TokenType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/okta_auth_backend#token_type OktaAuthBackend#token_type}.

---

### OktaAuthBackendUser <a name="OktaAuthBackendUser" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendUser"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendUser.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Vault;

new OktaAuthBackendUser {
    string[] Groups = null,
    string[] Policies = null,
    string Username = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendUser.property.groups">Groups</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/okta_auth_backend#groups OktaAuthBackend#groups}. |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendUser.property.policies">Policies</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/okta_auth_backend#policies OktaAuthBackend#policies}. |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendUser.property.username">Username</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/okta_auth_backend#username OktaAuthBackend#username}. |

---

##### `Groups`<sup>Optional</sup> <a name="Groups" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendUser.property.groups"></a>

```csharp
public string[] Groups { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/okta_auth_backend#groups OktaAuthBackend#groups}.

---

##### `Policies`<sup>Optional</sup> <a name="Policies" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendUser.property.policies"></a>

```csharp
public string[] Policies { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/okta_auth_backend#policies OktaAuthBackend#policies}.

---

##### `Username`<sup>Optional</sup> <a name="Username" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendUser.property.username"></a>

```csharp
public string Username { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/okta_auth_backend#username OktaAuthBackend#username}.

---

## Classes <a name="Classes" id="Classes"></a>

### OktaAuthBackendGroupList <a name="OktaAuthBackendGroupList" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendGroupList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendGroupList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Vault;

new OktaAuthBackendGroupList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendGroupList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendGroupList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendGroupList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendGroupList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendGroupList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendGroupList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendGroupList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendGroupList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendGroupList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendGroupList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendGroupList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendGroupList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendGroupList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendGroupList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendGroupList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendGroupList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendGroupList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendGroupList.get"></a>

```csharp
private OktaAuthBackendGroupOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendGroupList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendGroupList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendGroupList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendGroupList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendGroup">OktaAuthBackendGroup</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendGroupList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendGroupList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendGroupList.property.internalValue"></a>

```csharp
public IResolvable|OktaAuthBackendGroup[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendGroup">OktaAuthBackendGroup</a>[]

---


### OktaAuthBackendGroupOutputReference <a name="OktaAuthBackendGroupOutputReference" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendGroupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendGroupOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Vault;

new OktaAuthBackendGroupOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendGroupOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendGroupOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendGroupOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendGroupOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendGroupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendGroupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendGroupOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendGroupOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendGroupOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendGroupOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendGroupOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendGroupOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendGroupOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendGroupOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendGroupOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendGroupOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendGroupOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendGroupOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendGroupOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendGroupOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendGroupOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendGroupOutputReference.resetGroupName">ResetGroupName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendGroupOutputReference.resetPolicies">ResetPolicies</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendGroupOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendGroupOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendGroupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendGroupOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendGroupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendGroupOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendGroupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendGroupOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendGroupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendGroupOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendGroupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendGroupOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendGroupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendGroupOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendGroupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendGroupOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendGroupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendGroupOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendGroupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendGroupOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendGroupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendGroupOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendGroupOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendGroupOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetGroupName` <a name="ResetGroupName" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendGroupOutputReference.resetGroupName"></a>

```csharp
private void ResetGroupName()
```

##### `ResetPolicies` <a name="ResetPolicies" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendGroupOutputReference.resetPolicies"></a>

```csharp
private void ResetPolicies()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendGroupOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendGroupOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendGroupOutputReference.property.groupNameInput">GroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendGroupOutputReference.property.policiesInput">PoliciesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendGroupOutputReference.property.groupName">GroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendGroupOutputReference.property.policies">Policies</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendGroupOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendGroup">OktaAuthBackendGroup</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendGroupOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendGroupOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `GroupNameInput`<sup>Optional</sup> <a name="GroupNameInput" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendGroupOutputReference.property.groupNameInput"></a>

```csharp
public string GroupNameInput { get; }
```

- *Type:* string

---

##### `PoliciesInput`<sup>Optional</sup> <a name="PoliciesInput" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendGroupOutputReference.property.policiesInput"></a>

```csharp
public string[] PoliciesInput { get; }
```

- *Type:* string[]

---

##### `GroupName`<sup>Required</sup> <a name="GroupName" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendGroupOutputReference.property.groupName"></a>

```csharp
public string GroupName { get; }
```

- *Type:* string

---

##### `Policies`<sup>Required</sup> <a name="Policies" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendGroupOutputReference.property.policies"></a>

```csharp
public string[] Policies { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendGroupOutputReference.property.internalValue"></a>

```csharp
public IResolvable|OktaAuthBackendGroup InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendGroup">OktaAuthBackendGroup</a>

---


### OktaAuthBackendTuneList <a name="OktaAuthBackendTuneList" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendTuneList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendTuneList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Vault;

new OktaAuthBackendTuneList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendTuneList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendTuneList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendTuneList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendTuneList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendTuneList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendTuneList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendTuneList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendTuneList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendTuneList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendTuneList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendTuneList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendTuneList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendTuneList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendTuneList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendTuneList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendTuneList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendTuneList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendTuneList.get"></a>

```csharp
private OktaAuthBackendTuneOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendTuneList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendTuneList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendTuneList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendTuneList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendTune">OktaAuthBackendTune</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendTuneList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendTuneList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendTuneList.property.internalValue"></a>

```csharp
public IResolvable|OktaAuthBackendTune[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendTune">OktaAuthBackendTune</a>[]

---


### OktaAuthBackendTuneOutputReference <a name="OktaAuthBackendTuneOutputReference" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendTuneOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendTuneOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Vault;

new OktaAuthBackendTuneOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendTuneOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendTuneOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendTuneOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendTuneOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendTuneOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendTuneOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendTuneOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendTuneOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendTuneOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendTuneOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendTuneOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendTuneOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendTuneOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendTuneOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendTuneOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendTuneOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendTuneOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendTuneOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendTuneOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendTuneOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendTuneOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendTuneOutputReference.resetAllowedResponseHeaders">ResetAllowedResponseHeaders</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendTuneOutputReference.resetAuditNonHmacRequestKeys">ResetAuditNonHmacRequestKeys</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendTuneOutputReference.resetAuditNonHmacResponseKeys">ResetAuditNonHmacResponseKeys</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendTuneOutputReference.resetDefaultLeaseTtl">ResetDefaultLeaseTtl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendTuneOutputReference.resetListingVisibility">ResetListingVisibility</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendTuneOutputReference.resetMaxLeaseTtl">ResetMaxLeaseTtl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendTuneOutputReference.resetPassthroughRequestHeaders">ResetPassthroughRequestHeaders</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendTuneOutputReference.resetTokenType">ResetTokenType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendTuneOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendTuneOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendTuneOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendTuneOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendTuneOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendTuneOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendTuneOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendTuneOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendTuneOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendTuneOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendTuneOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendTuneOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendTuneOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendTuneOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendTuneOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendTuneOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendTuneOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendTuneOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendTuneOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendTuneOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendTuneOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendTuneOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendTuneOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendTuneOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAllowedResponseHeaders` <a name="ResetAllowedResponseHeaders" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendTuneOutputReference.resetAllowedResponseHeaders"></a>

```csharp
private void ResetAllowedResponseHeaders()
```

##### `ResetAuditNonHmacRequestKeys` <a name="ResetAuditNonHmacRequestKeys" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendTuneOutputReference.resetAuditNonHmacRequestKeys"></a>

```csharp
private void ResetAuditNonHmacRequestKeys()
```

##### `ResetAuditNonHmacResponseKeys` <a name="ResetAuditNonHmacResponseKeys" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendTuneOutputReference.resetAuditNonHmacResponseKeys"></a>

```csharp
private void ResetAuditNonHmacResponseKeys()
```

##### `ResetDefaultLeaseTtl` <a name="ResetDefaultLeaseTtl" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendTuneOutputReference.resetDefaultLeaseTtl"></a>

```csharp
private void ResetDefaultLeaseTtl()
```

##### `ResetListingVisibility` <a name="ResetListingVisibility" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendTuneOutputReference.resetListingVisibility"></a>

```csharp
private void ResetListingVisibility()
```

##### `ResetMaxLeaseTtl` <a name="ResetMaxLeaseTtl" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendTuneOutputReference.resetMaxLeaseTtl"></a>

```csharp
private void ResetMaxLeaseTtl()
```

##### `ResetPassthroughRequestHeaders` <a name="ResetPassthroughRequestHeaders" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendTuneOutputReference.resetPassthroughRequestHeaders"></a>

```csharp
private void ResetPassthroughRequestHeaders()
```

##### `ResetTokenType` <a name="ResetTokenType" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendTuneOutputReference.resetTokenType"></a>

```csharp
private void ResetTokenType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendTuneOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendTuneOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendTuneOutputReference.property.allowedResponseHeadersInput">AllowedResponseHeadersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendTuneOutputReference.property.auditNonHmacRequestKeysInput">AuditNonHmacRequestKeysInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendTuneOutputReference.property.auditNonHmacResponseKeysInput">AuditNonHmacResponseKeysInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendTuneOutputReference.property.defaultLeaseTtlInput">DefaultLeaseTtlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendTuneOutputReference.property.listingVisibilityInput">ListingVisibilityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendTuneOutputReference.property.maxLeaseTtlInput">MaxLeaseTtlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendTuneOutputReference.property.passthroughRequestHeadersInput">PassthroughRequestHeadersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendTuneOutputReference.property.tokenTypeInput">TokenTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendTuneOutputReference.property.allowedResponseHeaders">AllowedResponseHeaders</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendTuneOutputReference.property.auditNonHmacRequestKeys">AuditNonHmacRequestKeys</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendTuneOutputReference.property.auditNonHmacResponseKeys">AuditNonHmacResponseKeys</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendTuneOutputReference.property.defaultLeaseTtl">DefaultLeaseTtl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendTuneOutputReference.property.listingVisibility">ListingVisibility</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendTuneOutputReference.property.maxLeaseTtl">MaxLeaseTtl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendTuneOutputReference.property.passthroughRequestHeaders">PassthroughRequestHeaders</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendTuneOutputReference.property.tokenType">TokenType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendTuneOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendTune">OktaAuthBackendTune</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendTuneOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendTuneOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AllowedResponseHeadersInput`<sup>Optional</sup> <a name="AllowedResponseHeadersInput" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendTuneOutputReference.property.allowedResponseHeadersInput"></a>

```csharp
public string[] AllowedResponseHeadersInput { get; }
```

- *Type:* string[]

---

##### `AuditNonHmacRequestKeysInput`<sup>Optional</sup> <a name="AuditNonHmacRequestKeysInput" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendTuneOutputReference.property.auditNonHmacRequestKeysInput"></a>

```csharp
public string[] AuditNonHmacRequestKeysInput { get; }
```

- *Type:* string[]

---

##### `AuditNonHmacResponseKeysInput`<sup>Optional</sup> <a name="AuditNonHmacResponseKeysInput" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendTuneOutputReference.property.auditNonHmacResponseKeysInput"></a>

```csharp
public string[] AuditNonHmacResponseKeysInput { get; }
```

- *Type:* string[]

---

##### `DefaultLeaseTtlInput`<sup>Optional</sup> <a name="DefaultLeaseTtlInput" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendTuneOutputReference.property.defaultLeaseTtlInput"></a>

```csharp
public string DefaultLeaseTtlInput { get; }
```

- *Type:* string

---

##### `ListingVisibilityInput`<sup>Optional</sup> <a name="ListingVisibilityInput" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendTuneOutputReference.property.listingVisibilityInput"></a>

```csharp
public string ListingVisibilityInput { get; }
```

- *Type:* string

---

##### `MaxLeaseTtlInput`<sup>Optional</sup> <a name="MaxLeaseTtlInput" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendTuneOutputReference.property.maxLeaseTtlInput"></a>

```csharp
public string MaxLeaseTtlInput { get; }
```

- *Type:* string

---

##### `PassthroughRequestHeadersInput`<sup>Optional</sup> <a name="PassthroughRequestHeadersInput" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendTuneOutputReference.property.passthroughRequestHeadersInput"></a>

```csharp
public string[] PassthroughRequestHeadersInput { get; }
```

- *Type:* string[]

---

##### `TokenTypeInput`<sup>Optional</sup> <a name="TokenTypeInput" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendTuneOutputReference.property.tokenTypeInput"></a>

```csharp
public string TokenTypeInput { get; }
```

- *Type:* string

---

##### `AllowedResponseHeaders`<sup>Required</sup> <a name="AllowedResponseHeaders" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendTuneOutputReference.property.allowedResponseHeaders"></a>

```csharp
public string[] AllowedResponseHeaders { get; }
```

- *Type:* string[]

---

##### `AuditNonHmacRequestKeys`<sup>Required</sup> <a name="AuditNonHmacRequestKeys" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendTuneOutputReference.property.auditNonHmacRequestKeys"></a>

```csharp
public string[] AuditNonHmacRequestKeys { get; }
```

- *Type:* string[]

---

##### `AuditNonHmacResponseKeys`<sup>Required</sup> <a name="AuditNonHmacResponseKeys" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendTuneOutputReference.property.auditNonHmacResponseKeys"></a>

```csharp
public string[] AuditNonHmacResponseKeys { get; }
```

- *Type:* string[]

---

##### `DefaultLeaseTtl`<sup>Required</sup> <a name="DefaultLeaseTtl" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendTuneOutputReference.property.defaultLeaseTtl"></a>

```csharp
public string DefaultLeaseTtl { get; }
```

- *Type:* string

---

##### `ListingVisibility`<sup>Required</sup> <a name="ListingVisibility" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendTuneOutputReference.property.listingVisibility"></a>

```csharp
public string ListingVisibility { get; }
```

- *Type:* string

---

##### `MaxLeaseTtl`<sup>Required</sup> <a name="MaxLeaseTtl" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendTuneOutputReference.property.maxLeaseTtl"></a>

```csharp
public string MaxLeaseTtl { get; }
```

- *Type:* string

---

##### `PassthroughRequestHeaders`<sup>Required</sup> <a name="PassthroughRequestHeaders" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendTuneOutputReference.property.passthroughRequestHeaders"></a>

```csharp
public string[] PassthroughRequestHeaders { get; }
```

- *Type:* string[]

---

##### `TokenType`<sup>Required</sup> <a name="TokenType" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendTuneOutputReference.property.tokenType"></a>

```csharp
public string TokenType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendTuneOutputReference.property.internalValue"></a>

```csharp
public IResolvable|OktaAuthBackendTune InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendTune">OktaAuthBackendTune</a>

---


### OktaAuthBackendUserList <a name="OktaAuthBackendUserList" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendUserList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendUserList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Vault;

new OktaAuthBackendUserList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendUserList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendUserList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendUserList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendUserList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendUserList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendUserList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendUserList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendUserList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendUserList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendUserList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendUserList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendUserList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendUserList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendUserList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendUserList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendUserList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendUserList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendUserList.get"></a>

```csharp
private OktaAuthBackendUserOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendUserList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendUserList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendUserList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendUserList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendUser">OktaAuthBackendUser</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendUserList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendUserList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendUserList.property.internalValue"></a>

```csharp
public IResolvable|OktaAuthBackendUser[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendUser">OktaAuthBackendUser</a>[]

---


### OktaAuthBackendUserOutputReference <a name="OktaAuthBackendUserOutputReference" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendUserOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendUserOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Vault;

new OktaAuthBackendUserOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendUserOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendUserOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendUserOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendUserOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendUserOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendUserOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendUserOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendUserOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendUserOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendUserOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendUserOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendUserOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendUserOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendUserOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendUserOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendUserOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendUserOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendUserOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendUserOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendUserOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendUserOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendUserOutputReference.resetGroups">ResetGroups</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendUserOutputReference.resetPolicies">ResetPolicies</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendUserOutputReference.resetUsername">ResetUsername</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendUserOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendUserOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendUserOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendUserOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendUserOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendUserOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendUserOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendUserOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendUserOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendUserOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendUserOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendUserOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendUserOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendUserOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendUserOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendUserOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendUserOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendUserOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendUserOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendUserOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendUserOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendUserOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendUserOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendUserOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetGroups` <a name="ResetGroups" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendUserOutputReference.resetGroups"></a>

```csharp
private void ResetGroups()
```

##### `ResetPolicies` <a name="ResetPolicies" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendUserOutputReference.resetPolicies"></a>

```csharp
private void ResetPolicies()
```

##### `ResetUsername` <a name="ResetUsername" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendUserOutputReference.resetUsername"></a>

```csharp
private void ResetUsername()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendUserOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendUserOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendUserOutputReference.property.groupsInput">GroupsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendUserOutputReference.property.policiesInput">PoliciesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendUserOutputReference.property.usernameInput">UsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendUserOutputReference.property.groups">Groups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendUserOutputReference.property.policies">Policies</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendUserOutputReference.property.username">Username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendUserOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendUser">OktaAuthBackendUser</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendUserOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendUserOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `GroupsInput`<sup>Optional</sup> <a name="GroupsInput" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendUserOutputReference.property.groupsInput"></a>

```csharp
public string[] GroupsInput { get; }
```

- *Type:* string[]

---

##### `PoliciesInput`<sup>Optional</sup> <a name="PoliciesInput" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendUserOutputReference.property.policiesInput"></a>

```csharp
public string[] PoliciesInput { get; }
```

- *Type:* string[]

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendUserOutputReference.property.usernameInput"></a>

```csharp
public string UsernameInput { get; }
```

- *Type:* string

---

##### `Groups`<sup>Required</sup> <a name="Groups" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendUserOutputReference.property.groups"></a>

```csharp
public string[] Groups { get; }
```

- *Type:* string[]

---

##### `Policies`<sup>Required</sup> <a name="Policies" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendUserOutputReference.property.policies"></a>

```csharp
public string[] Policies { get; }
```

- *Type:* string[]

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendUserOutputReference.property.username"></a>

```csharp
public string Username { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendUserOutputReference.property.internalValue"></a>

```csharp
public IResolvable|OktaAuthBackendUser InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-vault.oktaAuthBackend.OktaAuthBackendUser">OktaAuthBackendUser</a>

---



